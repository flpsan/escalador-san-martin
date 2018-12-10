let mobile;

$(document).ready(() => {
    $(window).on('resize', windowResizeCallback);
    windowResizeCallback();    
});

let windowResizeCallback = () => {
    mobile = $(window).width() < 650;
    menu.resizeEvent();
};

let menu = {
    hide: () => { 
        if (mobile) {
            $('.menu').addClass('menu-escondido').on('click.1', () => { 
                $('.menu').off('click.1').removeClass('menu-escondido'); 
            });
        }
    },
    resizeEvent: () => {
        if (mobile) {
            $('.menu').addClass('menu-mobile');
            menu.hide();
        } else {
            $('.menu').off('click.1').removeClass('menu-escondido menu-mobile');
        }
    }
};

let _ = {
    overlayOn: () => $('#overlay').show(),
    overlayOff: () => $('#overlay').hide(),
    reload: () => location.reload(),
    ajaxIt: (url, params, cbSucess, cbFail) => {
        $.ajax({ type: 'POST', url: url, data: params })
        .done(function(json) {
            if (typeof cbSucess === 'function') {
                cbSucess(json);
            } else {
                _.reload();
            }
        }).fail(function(json) {
            if (typeof cbFail === 'function') {
                cbFail(json);
            } else {
                alert(json.responseText);
            }
        });
    }
}
let filtro = {
    limpar: () => {
        $('.filtro-section').find('[type=text]').val('')
        $('.filtro-section').find('[type=checkbox]').prop('checked', false);
        $('.filtro-section').find('.status [type=checkbox][value=7]').prop('checked', true);
    }
}

let escalador = {
    escalar:  () => {
        _.overlayOn();
        let sucess = () => { _.overlayOff(); _.reload(); };
        _.ajaxIt('/escalador/escalar', { }, sucess);
    },
    escalarAtleta: (atleta_id, posicao_id) => _.ajaxIt('/escalador/atleta/escalar', {atleta_id: atleta_id, posicao_id: posicao_id}),
    removerAtleta: (atleta_id) => _.ajaxIt('/escalador/atleta/remover', {atleta_id: atleta_id}),
    capitao: (atleta_id) => _.ajaxIt('/escalador/atleta/capitao', {atleta_id: atleta_id}),
    limpar: () => _.ajaxIt('/escalador/limpar', { }),
    alterarEsquema: () => _.ajaxIt('/escalador/alterar-esquema', { esquema: $('#esquema').val() })
};

let contaCartola = {
    incluir: () => {
        if ($('.incluir-conta-cartola-section').is(':visible')) {
            let dados = { email: $('#email').val(), senha: $('#senha').val() };
            let sucess = () => {
                $('.incluir-conta-cartola-section, #btnIncluirContaCartola').toggle();
                _.reload();
            };
            _.ajaxIt('/usuario/conta-cartola/add', dados, sucess);
        } else {
            $('.incluir-conta-cartola-section, #btnIncluirContaCartola').toggle();
        }        
    },
    remover: (id) => _.ajaxIt('/usuario/conta-cartola/remover', { id: id }),
    limpar: () => _.ajaxIt('/usuario/conta-cartola/limpar', { })
};