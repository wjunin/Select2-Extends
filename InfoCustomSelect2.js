$.fn.select2Ex = function (urlGet, dataSend, pagging, dropdown, required = true) {

    if (pagging.fnAsync === undefined || pagging.fnAsync === '') {
        pagging.fnAsync = true;
    };

    if (pagging.fnAsync !== true && pagging.fnAsync !== false) {
        pagging.fnAsync = true;
    }

    $(this).select2({
        language: {
            //tradução de mensagens para portugues
            loadingMore:function () { return "Carregando mais dados..."; },
            noResults: function () { return 'Nenhum registro localizado'; },
            searching: function () { return 'Pesquisando...'; },
            formatNoMatches: function () { return "Pesquisa não encontrada"; },
            formatInputTooShort: function (input, min) { return "Digite " + (min - input.length) + " caracteres para pesquisar"; },
            formatSelectionTooBig: function (limit) { return "Selecione apenas 1 opção " + limit + " item" + (limit == 1 ? "" : "s"); },
            formatLoadMore: function (pageNumber) { return "Carregando mais dados..."; },
            formatSearching: function () { return "Pesquisando..."; },
        },
        dropdownParent: dropdown,
        ajax: ({
            url: urlGet,
            dataType: "json",
            delay: 250,
            maximumSelectionLength: 1,
            minimumInputLength: 3,
            maximumInputLength: 20,
            tags: true,
            placeholder: "Escolha uma opção",
            allowClear: true,
            width: '100%',

            data: function (params) {
                var query = {
                    search: params.term,
                    page: params.page,
                    type: 'public'
                }

                if (dataSend !== null && dataSend !== undefined) {
                    Object.assign(query, dataSend);
                }
                
                if (params.term == "*") query.items = [];
                return query;
            },
            processResults: function (result, params) {
                if (result.JsonTypes !== "success") {
                    noty({ text: result.Mensagem, layout: 'topRight', type: result.JsonTypes, dismissQueue: true, modal: false, timeout: timeoutErroNoty });
                }
                params.page = params.page || 1;
                return {
                    pagination: {
                        more: pagging
                    },
                    results: result.data
                }
            }
        })
    })
    if (required) {
        $(this).attr("data-validar", true);
        $(this).on('change', function () {
            $(this).checkDataSelect2("Este campo é obrigatório");
        })
    }
    else {
        $(this).attr("data-validar", false);
    }

    $(this).show();
    $(this).css({ "display": "inline-block", "width": "100%" });
}

$.fn.fillSelect2 = function (id, text) {
    try {
        id ??= '';
        text ??= '';

        $(this).empty();
        $(this).val(null).trigger('change');

        if (id !== '' && text !== '') {
            var newOption = new Option($.trim(text), $.trim(id), true, true);
            $(this).append(newOption).trigger('change');
        }
    }
    catch {
        console.log("Erro no carregamento do componente select2Ex");
    }
}

$.fn.checkDataSelect2 = function(mensagem)
{
    let value = $(this).val();
    let objectN = 'div-error-' + $(this).attr('name');
    let exists = $('#' + objectN).length;

    if (exists > 0) {
        $('#' + objectN).remove();
    }

    let validate = $(this).data('validar');

    if (value === "" || value === undefined || value === null || value === "null") {
        let object = $(this);
        let parent = $(this).parent();

        let $label = $('<div>')
            .attr({ id: objectN, name: objectN })
            .html(mensagem)
            .addClass('error mt-2 text-danger')
            .css({ "display": "block", "width": "100%" });

        parent.append($label);

        $('#' + objectN).show();
        $(this).show();
        return false;
    }

    $('#' + objectN).hide();
    $(this).show();
    $(this).css({ "display": "inline-block", "width": "100%" });
    return true;
}
