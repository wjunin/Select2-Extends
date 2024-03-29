![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

# Select2-Extends
Extendendo as funcionalidades da Select2

# versão utilizada
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.20.0/jquery.validate.min.js" integrity="sha512-WMEKGZ7L5LWgaPeJtw9MBM4i5w5OSBlSjTjCtSnvFJGSVD26gE5+Td12qN5pvWXhuWaWcVwF++F7aqu9cvqP0A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

# Facilitador de desenvolvimento utilizando componente Select2
Parametros de entrada:
  *  urlGet: Caminho para obter dados do back-end no padrão json
  *  dataSend: Dados fixos no formato json utilizado para envio no POST para o back-end
  *  pagging: True or False, para indicar se haverá paginação **Padrão: True**
  *  dropdown: Quando utilizado em janelas modal, deve ser indicado o ID da modal para abertura da caixa de seleção
  *  required: Indica se o campo é obrigatório ou não **Padrão: True**
    
# Forma de utilizar
    <html lang="pt-br">
        <head>
            <meta charset="utf-8" />
            <meta http-equiv="content-language" content="pt-br">
            <meta http-equiv="content-type" content="text/html; charset=utf-8">
            <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=no'>
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="Description" content="Select2-Extends">
            <meta name="Author" content="Wander Junior">

            <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
            <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
            <script src="~/js/InfoCustomSelect2.js?v=@v" type="text/javascript"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.20.0/jquery.validate.min.js" integrity="sha512-WMEKGZ7L5LWgaPeJtw9MBM4i5w5OSBlSjTjCtSnvFJGSVD26gE5+Td12qN5pvWXhuWaWcVwF++F7aqu9cvqP0A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>            
        </head>
        <body>
            <div class="col-md-4">
                <label class="form-label">N. Juridica</label>
                <select id="SuaSelect" name="SuaSelect" class="form-select input-laranja" data-element="natJuridica" data-element-text="natJuridicaTXT"></select>
            </div>            
        </body>
    </html>
    <script type="text/javascript">
        //Chamada para a extensão do arquivo de extensão
        var _suaSelect = $('#SuaSelect').select2Ex('<caminho para chamada no back-end>', null, true);

        //Seleção da opção desejada
        function CarregarOpcaoDesejada(id, text){
            $('#SuaSelect').fillSelect2(id, text);
        }

        //Para Validar se alguma opção foi selecionada
        function ValidarSelecao(){
            $('#SuaSelect').checkDataSelect2('Sua mensagem caso nenhuma opção tenha sido escolhida');
        }
        
    </script>
