const body = document.querySelector('body');
const rainbowColors = document.querySelectorAll('.rainbow-color');
const img = document.querySelector('img');
const h1 = document.querySelector('h1');
const footer = document.querySelector('footer'); 
const purple = document.querySelector('.purple')
const modal = document.querySelector('.modal');
const title = document.querySelector('h2');
const paragraph = document.querySelector('p');
const video = document.querySelector('.video');
const iFrame = document.createElement('iframe');
const a = document.querySelector('a');
const linkToSpeaker = document.querySelector('.link-to-speaker');
const topPurpleVideo = document.createElement('iframe');


function handleChangeBackgroundColor(e){
    video.append(iFrame);

    if(e.target.id === 'purple'){
        topPurpleVideo.setAttribute('src', 'https://www.youtube.com/embed/XeuZG0zyi0k')
        iFrame.setAttribute('src', 'https://www.youtube.com/embed/lwzBfbw9l-w');
        iFrame.style.width = '360px';
        iFrame.style.height = '275px';
        body.style.backgroundImage = 'url(./assets/rochelle-brown-P-K0CNvhBoI-unsplash.jpg)';
        body.style.backgroundSize = 'cover';
        title.innerText = 'Cores e o sinal de + da sigla LGBTQIAP+';
        paragraph.innerText = 'Ikaro Kadoshi explica o significado das cores da bandeira LGBTQIAP+, e Rita Von Hunty fala sobre o sinal de +';
        modal.style.display = 'flex';
        modal.style.backgroundColor = '';
        video.classList.add('purple-video');
        topPurpleVideo.classList.add('purple-top-video');
        video.append(topPurpleVideo);
        topPurpleVideo.style.display = 'flex';
        h1.innerText = '';
        iFrame.style.marginBottom = 0;
        footer.style.display = 'none';


    } else {
        h1.innerText = '';
        img.style.display = 'none';
        body.style.backgroundImage = '';
        body.style.setProperty('--primary-color', `${e.target.id}`);
        video.classList.remove('purple-video');
        modal.style.display ='flex';
        topPurpleVideo.style.display = 'none';
        iFrame.style.width = '560px';
        iFrame.style.height = '315px';
        iFrame.style.marginBottom = '15%';
        linkToSpeaker.style.display = 'none';
        a.setAttribute('target', '_blank');
        footer.style.display = 'flex';


        
        if(e.target.id === 'red'){
            body.style.backgroundColor = '#e50303ba';
            iFrame.setAttribute('src', 'https://www.youtube.com/embed/0ZQqYR3HoPM');
            title.innerText = 'L??sbicas';
            paragraph.innerText = 'Mulheres que se sentem atra??das emocionalmente e/ou fisicamente por outras mulheres, sejam elas cisg??nero ou transg??nero.';

            }else if(e.target.id === 'orangered'){
                body.style.backgroundColor = '#ff4400cb';
                iFrame.setAttribute('src', 'https://www.youtube.com/embed/9DHROmg0Mek');
                title.innerText = 'Gays';
                paragraph.innerText = 'Homens que se sentem atra??dos emocionalmente e/ou fisicamente por outros homens, sejam cisg??nero ou transg??nero.';
            }else if(e.target.id === 'yellow'){
                body.style.backgroundColor = '#ffff00ba';
                iFrame.setAttribute('src', 'https://www.youtube.com/embed/RuFY9eA67OY');
                title.innerText = 'Bissexuais';
                paragraph.innerText = 'Pessoas que se sentem atra??das emocionalmente e/ou fisicamente por homens e mulheres.';
            }else if(e.target.id === 'green'){
                body.style.backgroundColor = '#008000';
                iFrame.setAttribute('src', 'https://www.youtube.com/embed/j57S7e8wSB0');
                title.innerText = 'Transg??neros';
                paragraph.innerText = 'Pessoas cujo g??nero ou express??o de g??nero difere daquela determinada no nascimento. Podem ser h??teros, l??sbicas, gays, bissexuais ou queer.';
            }else if(e.target.id === 'blue'){
                body.style.backgroundColor = '#0000ffe3';
                iFrame.setAttribute('src', 'https://www.youtube.com/embed/a7Ai_UFyVdg')
                title.innerText = 'Queer';
                paragraph.innerText = 'Antes pejorativo na l??ngua inglesa, agora ?? um termo mais abrangente, usado por pessoas que n??o se identificam com as normas de heterossexualidade ou g??nero bin??rio.';
            }else if(e.target.id === 'cornflowerblue'){
                body.style.backgroundColor = '#6495ed';
                title.innerText = 'Intersexo';
                iFrame.setAttribute('src', 'https://www.youtube.com/embed/6l2GDA1qnSo');
                paragraph.innerText = 'Pessoas cujo sexo determinado no nascimento n??o se encaixa no que ?? socialmente considerado como masculino ou feminino porque sua genit??lia, n??vel de produ????o de horm??nio e/ou composi????o cromoss??mica s??o amb??guos ou n??o bin??rios.';
            }else if(e.target.id === 'pink'){
                body.style.backgroundColor = '#ffc0cb';
                iFrame.setAttribute('src', 'https://www.youtube.com/embed/ajBvfyrOv28');
                title.innerText = 'Assexuais';
                paragraph.innerText = 'Pessoas que n??o sentem atra????o sexual, podendo ainda desenvolver o amor e o afeto.';
            }else if(e.target.id === 'violet'){
                body.style.backgroundColor = '#ee82ee';
                iFrame.setAttribute('src', 'https://www.youtube.com/embed/Tzg_QvOkcDw');
                title.innerText = 'Pansexuais';
                paragraph.innerText = 'Pessoas cujo amor e atra????o f??sica se direcionam a outras independente de sua identidade de g??nero ou sexo biol??gico.';
            }else if(e.target.id === 'black'){
                body.style.backgroundColor = '#000000';
                iFrame.setAttribute('src', 'https://www.youtube.com/embed/Z6acPxenN14');
                title.innerText = 'Movimento Negro x LGBTQIAP+';
                paragraph.innerText = 'Neste v??deo, Al?? Garcia comenta as intersec????es entre os movimentos negro e LGBTQIAP+, sob uma perspectiva hist??rica que aborda os contextos brasileiro e estadunidense.';
            }else if(e.target.id === 'brown'){
                body.style.backgroundColor = '#a52a2a';
                iFrame.setAttribute('src', 'https://www.youtube.com/embed/QsPTcCRmKFg');
                title.innerText = 'Angelica Ross';
                paragraph.innerText = 'Neste TED Talk inspirador, a atriz e criadora da startup de T.I. "Trans Tech Social" relata sua hist??ria de supera????o e afirma categoricamente: "Eu tive a aud??cia de pensar que os sonhos de uma mulher preta trans importam tamb??m."';
                a.style.display = 'flex';
                a.innerText = 'Clique aqui e saiba mais sobre Angelica Ross.'
                a.setAttribute('href', 'https://www.geledes.org.br/atriz-de-pose-que-aprendeu-a-programar-sozinha-vem-ao-brasil-divulgar-startup-de-ti-que-criou-para-ajudar-pessoas-trans-como-ela/');
                 
            }
    }
}
    
modal.addEventListener('click', function (){
    modal.style.display = 'none';
})

for (const rainbowColor of rainbowColors) {
    rainbowColor.addEventListener('click', handleChangeBackgroundColor );
}
    
// PR??XIMO DESAFIO:
// Passar para o REACT e usar Material UI - biblioteca de componentes react, assim como a Chakra UI (testar ele tb depois)
// Componentes: video, botoes
// Fazer modal com card: props - t??tulo e texto