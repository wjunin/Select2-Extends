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
  *  dataSend: Dados fixos no formato json
  *  pagging: True or False, para indicar se haverá paginação **Padrão: True**
  *  dropdown: Quando utilizado em janelas modal, deve ser indicado o ID da modal para abertura da caixa de seleção
  *  required: Indica se o campo é obrigatório ou não **Padrão: True**
