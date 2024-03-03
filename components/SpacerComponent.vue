<template>
    <div :style="spacerStyle"></div>
</template>
  
<script>
export default {
    name: 'SpacerComponent',
    props: {
        // The space prop can be a number or a string. If it's a number, it will default to pixels.
        // If it's a string, you can specify units (like '1rem', '5%', '10vh', etc.).
        space: {
            type: [Number, String],
            required: true
        }
    },
    computed: {
        // Convert the space prop to a CSS value
        spacerStyle() {
            // If the space prop is a number, append 'px' to make it a valid CSS value.
            // If it's a string, use it as is.
            const size = typeof this.space === 'number' ? `${this.space}px` : this.space;
            // Return the style object with the size applied to both width and height.
            // You can customize this to only apply to one dimension if needed.
            return {
                width: size,
                height: size,
            };
        }
    }
};
</script>
