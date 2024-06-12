<template>
    <footer class="footer">
        <span class="desktop-footer">{{ $t("footer.created") }} <a href="https://dianaorsolyova.com/" target="_blank">Diana Oršolyová</a>
             | {{ $t("footer.design") }} <a href="https://www.linkedin.com/in/dalibor-jancura-23613a281" target="_blank">Dalibor Jancura</a></span>
        <span class="mobile-footer">{{ $t("footer.created") }} <a href="https://dianaorsolyova.com/" target="_blank">Diana Oršolyová</a>
             <br>{{ $t("footer.design") }} <a href="https://www.linkedin.com/in/dalibor-jancura-23613a281" target="_blank">Dalibor Jancura</a></span>
        <!-- <router-link to="/privacy-policy" class="footer-text">{{ $t("footer.privacy") }}</router-link> -->
    </footer>
</template>
  
<script>
export default {
    name: 'FooterComponent'
}
</script>
  
<style scoped>
.footer {
    position: relative;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    /* justify-content: space-between; */
    padding: 1rem 3rem;
    box-sizing: border-box;
    text-align: center;
}
.desktop-footer {
    display: block;
}
.mobile-footer {
    display: none;
}
@media (max-width: 900px) {
    .footer {
        height: auto;
        flex-direction: column;
        justify-content: center;
        padding: 1rem;
        gap: 5rem;
    }
    .desktop-footer{
        display: none;
    }
    .mobile-footer{
        display: block;
    }

}
span a {
    color: #f7a4ff;
}
a:hover {
    color:white;
}
</style>
