// script.js
document.getElementById('toggleButton').addEventListener('click', function() {
    const toggleDiv = document.getElementById('toggleDiv');
    toggleDiv.classList.toggle('dark-mode');
    toggleDiv.classList.toggle('light-mode');


    

    if (toggleDiv.classList.contains('dark-mode')) {
        toggleDiv.innerHTML = '<br><div style="color: #FFFFF;" class="div2"><h1>VALORANT</h1></div><a><h1>Reyna, a imperatriz.</h1><p>Reyna, uma Radiante mexicana e a décima primeira Agente do PROTOCOL,<br> utiliza suas habilidades ligadas à colheita das almas de suas vítimas para lutar. <br>Orgulhosa e agressiva, Reyna despreza a tecnologia e acredita na superioridade dos<br> Radiantes. Suas habilidades incluem Devour, que regenera sua saúde, Dismiss, que a <br>torna temporariamente invulnerável, e Empress, que amplifica suas capacidades.<br>Essas habilidades vêm com o custo de precisar constantemente de almas para<br> sobreviver, levando-a a um estado de fome perpétua. Reyna tem um forte orgulho por sua<br> Radiância e luta contra a discriminação entre Radiantes e não-Radiantes, tendo desenvolvido <br>opiniões radicais e um ódio profundo pela corporação Kingdom, conhecida por explorar Radiantes.</p></a> <div class="parte2"><a><h1>Viper, A víbora.</h1><p>Viper é uma cientista brilhante dos Estados Unidos e o segundo membro do PROTOCOLO VALORANT. Antes admirada por sua inteligência e conquistas, um incidente desconhecido a transformou em uma pessoa amarga e vingativa. Ela abandonou a cura em favor de venenos, desenvolvendo habilidades tóxicas usadas no combate. Viper tem uma história complexa, incluindo um relacionamento conturbado com Omen, que ela transformou em Radiante após uma tentativa fracassada de assassinato. Seu passado sombrio e busca incessante por vingança moldam sua personalidade agressiva e implacável. Apesar disso, Viper ainda reconhece o valor em outros, expressando apreciação quando impressionada.</p></div>';

    

       


    } else {
        toggleDiv.innerHTML = '<div  style="color: #262626;" class="div2"><h1>LEAGUE OF LEGENDS</h1></div><a><h1>Ekko, O rapaz que estilhaçou o tempo.</h1><p>Ekko, um gênio nascido em Zaun, cresceu em meio à poluição e criminalidade, mas via sua<br> cidade como um lugar de energia e potencial. Fascinado pela inovação dos zaunitas, ele<br> passou sua juventude criando invenções. Em uma noite, encontrou um fragmento de cristal<br>hextec mágico que, após intensas experimentações, lhe concedeu o poder de manipular o tempo.  <br> Com esse poder, Ekko criou o dispositivo Revo-Z e salvou a vida de um amigo durante uma escalada <br>perigosa, usando suas habilidades temporais. Suas artimanhas temporais atraíram a atenção de <br>indivíduos poderosos, mas Ekko permanecia focado em ajudar seus amigos e sua cidade. <br>Ele sonha em ver Zaun superar Piltover, acreditando na engenhosidade e coragem de seu <br>povo, moldado pela adversidade e audácia.</p></a><div class="parte2"><a><h1>Kayn, O ceifador das sombras.</h1><p>Nascido em Noxus, Shieda Kayn foi recrutado como criança-soldado sob o comando cruel de Boram Darkwill. Durante uma invasão prolongada em Ionia, Kayn mostrou uma coragem inabalável, capturando a atenção de Zed, líder da Ordem das Sombras. Zed viu potencial no jovem guerreiro e o acolheu na Ordem, onde Kayn rapidamente dominou diversas armas, preferindo agilidade e discrição. Arrogante e ambicioso, Kayn aceitou a missão de recuperar a foice darkin, Rhaast, em Noxus. Corrompido pela arma, ele retornou triunfante a Ionia, crente de que superaria até Zed e se tornaria o novo líder da Ordem das Sombras.</p></div>';
    }


    
});


const button = document.getElementById('toggleButton');

    button.addEventListener('click', () => {
        button.classList.toggle('alternate-hover');
   
    });
