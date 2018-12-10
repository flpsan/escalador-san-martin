var moduloFiltro = (function(){

  function filterChangeEvent(jFiltroContainer) {
    if (jFiltroContainer.find('.filtro .selecionado').length > 0) {
      jFiltroContainer.find('.filtro-vazio').addClass('hide');
      jFiltroContainer.find('.limpar').removeClass('hide');      
    } else {
      jFiltroContainer.find('.limpar').addClass('hide');
      jFiltroContainer.find('.filtro-vazio').removeClass('hide');
    }
  }
  
  return {
    limpar: elem => {
      var jFiltroContainer = $(elem).parents('.container-filtro');
      jFiltroContainer.find('.elemento-atomico-de-filtro').removeClass('selecionado');
      jFiltroContainer.find('.elemento-atomico-de-filtro .check-icon').removeClass('check');
      filterChangeEvent(jFiltroContainer);
    },
    
    excluirClube: id => {
      $(`.menu-add .time[data-valor=${id}]`).removeClass('selecionado'); 
      $(`.filtro .time[data-valor=${id}]`).removeClass('selecionado');
      filterChangeEvent($('.container-filtro.times'));
    },
    
    addFiltro: (valor, nomeFiltro) => {
      if (nomeFiltro === 'preco') {
        $('#slider')[0].noUiSlider.set(valor)
        return;
      }
      var jContainerFiltro = $(`.container-filtro.${nomeFiltro}`)
      if (nomeFiltro === 'nome') {
        jContainerFiltro.find('input').val(valor)
        jContainerFiltro.data('valor', valor)
        return;
      }
      var jElementoAtomico = jContainerFiltro.find(`.elemento-atomico-de-filtro[data-valor=${valor}]`)
      jContainerFiltro.find(`.menu-add .elemento-atomico-de-filtro[data-valor=${valor}]`).toggleClass('selecionado') 
      jElementoAtomico.toggleClass('selecionado');
      jElementoAtomico.find('.check-icon').toggleClass('check')
      filterChangeEvent(jContainerFiltro)
    },
    
    onload: function(qs) {
      
      this.qs = qs;
  
      //Seta comportamento do slider de preço
      this.slider = noUiSlider.create($('#slider')[0], {
        start: [0, 50],
        step: 1,
        margin: 1,
        connect: true,
        behaviour: 'tap',
        format: wNumb({decimals: 0}),
        range: {
          'min': 0,
          'max': 50
        }
      });
      slider.noUiSlider.on('update', (a, b, unencoded) => {
        $('.container-filtro.preco #de').html(unencoded[0]).attr('data-valor', unencoded[0]);
        $('.container-filtro.preco #ate').html(unencoded[1]).attr('data-valor', unencoded[1]);
      });
      
      //Carrega os filtros na tela
      var classesQs = Object.keys(this.qs)
      
      let jFiltros = $('.container-filtro')
      for (let i = 0; i < jFiltros.length; i++) {
        let jFiltro = $(jFiltros[i])
        let nomeFiltro = jFiltro.data('nome-filtro')
        if (classesQs.indexOf(nomeFiltro) !== -1) {          
          let filtroQs0 = this.qs[nomeFiltro]
          if (nomeFiltro === 'preco') {
            this.addFiltro(filtroQs0, nomeFiltro)
          } else {
            for (let j = 0; j < filtroQs0.length; j++) {
              this.addFiltro(filtroQs0[j], nomeFiltro)
            }
          }
        }
      }
      
    },
    
    keyuptest: (elem) => {
      const val = $(elem).val()
      $(elem).parent().data('valor', val)
      console.log($(elem), val, $(elem).parent().data('valor'))
    },
    
    filtrar: function () {
      const filtros = ['times', 'status', 'posicoes', 'preco', 'nome']
      var qsJson = {}
      for (let i=0; i < filtros.length; i++) {
        qsJson[filtros[i]] = $(`.container-filtro.${filtros[i]} .filtro .elemento-atomico-de-filtro.selecionado`).toArray().map(e => filtros[i]=='nome'?$(e).data('valor'):parseInt($(e).data('valor')))
      }
      console.log(qsJson)
      window.location.href = `/?${$.param(qsJson)}`
    }    
  }
})();