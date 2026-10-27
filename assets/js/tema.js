(function () {
    var kayitliTema = null
    try { kayitliTema = localStorage.getItem('tema') } catch (hata) { kayitliTema = null }
    document.documentElement.dataset.tema = kayitliTema === 'acik' ? 'acik' : 'koyu'
})()