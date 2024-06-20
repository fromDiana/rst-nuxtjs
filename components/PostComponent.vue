<template>
    <div class="wrapper">
        <div class="text-element smaller-title" v-text="title" style="font-size: 26px;"></div>
        <div class="text-element" v-text="date" style="font-size: 16px; color: #909090"></div>
        <div class="text-element smaller-description" v-text="description" style="font-size: 18px;"></div>
        <div class="images">
            <div v-for="(image, index) in actualImageNames" :key="image.name" class="image-container">
                <img :src="getImagePath(image.name)" :alt="image.alt" class="post-image" @click="openModal(index)" />
            </div>
            <div v-if="allActualImages.length > 4 && !showModal && showPlusDiv" @click="openModal(3)" class="plus">+
            </div>
        </div>

        <div v-if="showModal" class="modal" @click="closeModalOnOutsideClick">
            <button class="close" @click="closeModal()">&times;</button>
            <button class="prev" @click="previousImage">&#10094;</button>
            <img :src="modalImagePath" class="modal-content" alt="image in modal">
            <button class="next" @click="nextImage">&#10095;</button>
        </div>

    </div>
</template>

<script>
import { EventBus } from '@/eventBus';
export default {
    name: 'PostComponent',
    props: {
        title: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        imagePath: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            // Assuming you know these are the potential images
            potentialImageNames: ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg',
                'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg', 'image10.jpg'],
            actualImageNames: [],
            allActualImages: [],
            showModal: false,
            showPlusDiv: true,
            currentImageIndex: 0,
            touchStartX: 0,
            touchEndX: 0,
        }
    },
    created() {
        let imagesData;
        try {
            imagesData = require(`@/assets/posts/${this.imagePath}/data.js`).default;
        } catch (e) {
            console.error(`Failed to load images data for ${this.imagePath}:`, e);
            return;
        }

        let currentLocale = this.$i18n.locale;
        if (imagesData[currentLocale] && imagesData[currentLocale].images) {
            this.actualImageNames = imagesData[currentLocale].images.slice(0, 4);
            this.allActualImages = imagesData[currentLocale].images;
        } else {
            console.error(`Images data for locale ${currentLocale} not found in ${this.imagePath}`);
        }
    },
    computed: {
        modalImagePath() {
            if (this.allActualImages && this.allActualImages.length > this.currentImageIndex) {
                return this.getImagePath(this.allActualImages[this.currentImageIndex].name);
            }
            return '';
        }
    },
    methods: {
        getImagePath(imageName) {
            try {
                return require(`@/assets/posts/${this.imagePath}/${imageName}`);
            } catch (e) {
                return '';
            }
        },
        openModal(imageIndex) {
            this.currentImageIndex = imageIndex;
            this.showModal = true;
            EventBus.emit('modalOpened');

            // Wait for the next DOM update cycle before trying to access the modal
            this.$nextTick(() => {
                const modalElement = document.querySelector('.modal');
                if (modalElement) {
                    modalElement.style.display = 'flex';
                } else {
                    console.error('Modal element not found');
                }
                const modalImage = document.querySelector('.modal-content');
                if (modalImage) {
                    modalImage.addEventListener('touchstart', this.handleTouchStart, false);
                    modalImage.addEventListener('touchend', this.handleTouchEnd, false);
                }
            });
            window.addEventListener('keydown', this.handleKeydown);
        },
        closeModal() {
            this.showModal = false;
            EventBus.emit('modalClosed');
            const modalImage = document.querySelector('.modal-content');
            if (modalImage) {
                modalImage.removeEventListener('touchstart', this.handleTouchStart, false);
                modalImage.removeEventListener('touchend', this.handleTouchEnd, false);
            }

            window.removeEventListener('keydown', this.handleKeydown);
        },
        closeModalOnOutsideClick(event) {
            // Check if the click is directly on the modal background
            if (event.target.classList.contains('modal')) {
                this.closeModal();
            }
        },
        handleTouchStart(event) {
            this.touchStartX = event.changedTouches[0].screenX;
        },
        handleTouchMove(event) {
            this.touchEndX = event.changedTouches[0].screenX;
        },
        handleTouchEnd() {
            if (this.touchStartX - this.touchEndX > 50) {
                // Swipe left
                this.nextImage();
            } else if (this.touchStartX - this.touchEndX < -50) {
                // Swipe right
                this.previousImage();
            }
        },
        handleKeydown(event) {
            if (event.key === "ArrowRight") {
                this.nextImage();
            } else if (event.key === "ArrowLeft") {
                this.previousImage();
            }
        },
        nextImage() {
            this.currentImageIndex = (this.currentImageIndex + 1) % this.allActualImages.length;
        },
        previousImage() {
            this.currentImageIndex = (this.currentImageIndex + this.allActualImages.length - 1) % this.allActualImages.length;
        },
    },
    mounted() {
        EventBus.on('modalOpened', () => {
            this.showPlusDiv = false;
        });
        EventBus.on('modalClosed', () => {
            this.showPlusDiv = true;
        });
    },
    beforeUnmount() {
        EventBus.off('modalOpened');
        EventBus.off('modalClosed');
    }
}
</script>

<style>
.wrapper {
    display: flex;
    width: 30rem;
    padding: 1.5rem;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;
    border-radius: 1.875rem;
    border: 1px solid #4b4b4b;
}

.text-element {
    align-self: stretch;
}

.images {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: flex-start;
    align-content: flex-start;
}

.image-container {
    border: 1px solid white;
    width: 49%;
    padding-top: 49%;
    position: relative;
}

.plus {
    position: absolute;
    width: 49%;
    height: 49%;
    background-color: rgba(0, 0, 0, 0.5);
    color: rgb(133, 133, 133);
    font-size: 5rem;
    font-weight: 100 !important;
    bottom: 0;
    right: 0;
    transform: translate(-3%, -2%);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    cursor: pointer;
}

.post-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    opacity: 1;
}

.post-image:hover {
    opacity: 0.7;
    transition: 0.3s ease-in-out;
}

.images {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    position: relative;
    align-items: flex-start;
    align-content: flex-start;
}

.modal {
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.9);
    /* Centering content with flex */
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal[style*="display: flex"] {
    display: flex;
}

.modal-content {
    margin: auto;
    display: block;
    max-height: 70vh;
}

.close {
    position: absolute;
    top: 7rem;
    color: white;
    font-size: 40px;
    font-weight: bold;
    right: 3rem;
}

button {
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.prev,
.next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 3rem;
    margin-top: -50px;
    color: white;
    font-weight: bold;
    font-size: 20px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
}

.next {
    right: 0;
}

.prev {
    left: 0;
}

@media (max-width: 900px) {
    .wrapper {
        width: 90%;
    }

    .modal-content {
        max-width: 80vw;
        max-height: 70vh;
    }

    .prev,
    .next {
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .plus {
        font-size: 15vw;
    }

    .smaller-title {
        font-size: 20px !important;
    }

    .smaller-description {
        font-size: 16px !important;
    }
}
</style>