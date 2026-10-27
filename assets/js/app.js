
const menuBaglantilari = document.querySelectorAll('.gezinme__baglanti')
const temadüğmesi = document.getElementById('tema-dugmesi')
const temaIkonu = document.getElementById('tema-ikonu')
const bolumler = document.querySelectorAll('section[id]')

const menuGoster = (dugmeId, menuId) => {
    const dugme = document.getElementById(dugmeId),menu = document.getElementById(menuId)
    if (dugme && menu) {
        dugme.addEventListener('click', () => {
            menu.classList.toggle('goster')
        })
    }
}
menuGoster('gezinme-dugme', 'gezinme-menu')

function menuyuKapat() {
    const menu = document.getElementById('gezinme-menu')
    if (menu) { menu.classList.remove('goster') }
}
menuBaglantilari.forEach(baglanti => baglanti.addEventListener('click', menuyuKapat))

function ikonuGuncelle(tema) {
    if (!temaIkonu) return
    temaIkonu.className = tema === 'acik' ? 'bx bx-sun' : 'bx bx-moon'
}
ikonuGuncelle(document.documentElement.dataset.tema)

if (temadüğmesi) {
    temadüğmesi.addEventListener('click', () => {
        const yeniTema = document.documentElement.dataset.tema === 'acik' ? 'koyu' : 'acik'
        document.documentElement.dataset.tema = yeniTema
        ikonuGuncelle(yeniTema)
        try { localStorage.setItem('tema', yeniTema) } catch (hata) { return }
    })
}

function aktifBolum() {
    const kaydirma = window.scrollY
    bolumler.forEach(bolum => {
        const bolumYuksekligi = bolum.offsetHeight
        const bolumUst = bolum.offsetTop - 50
        const bolumId = bolum.getAttribute('id')
        const baglanti = document.querySelector('.gezinme__menu a[href="#' + bolumId + '"]')
        if (!baglanti) return

        if (kaydirma > bolumUst && kaydirma <= bolumUst + bolumYuksekligi) {
            baglanti.classList.add('aktif')
        } else {
            baglanti.classList.remove('aktif')
        }
    })
}
window.addEventListener('scroll', aktifBolum)

if (typeof ScrollReveal === 'function') {
    const sr = ScrollReveal({ origin: 'top', distance: '60px', duration: 2000, delay: 200, reset: false })
    sr.reveal('.anasayfa__veri, .hakkimda__gorsel, .yetenekler__altbaslik, .yetenekler__metin', {})
    sr.reveal('.anasayfa__gorsel, .hakkimda__altbaslik, .hakkimda__metin, .yetenekler__gorsel', { delay: 400 })
    sr.reveal('.anasayfa__sosyal-ikon', { interval: 200 })
    sr.reveal('.yetenekler__veri', { interval: 200 })
}