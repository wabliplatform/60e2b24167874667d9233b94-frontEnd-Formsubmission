let apiQuestApi = new TempApi.QuestApi();import TempApi from '../src/index';let quest = new TempApi.Quest();$(
      function () { $("#datepicker").datepicker({format: 'dd-mm-yyyy'}); }
    );document.getElementById('iyrq2').onclick = (event) => {
    event.preventDefault();
    quest['paperD'] = document.querySelector("[annotationname = 'paperD']").value;quest['lcodetools'] = document.querySelector("[annotationname = 'lcodetools']").value;apiQuestApi.createquest( quest, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); }});};window.onload = () => {};