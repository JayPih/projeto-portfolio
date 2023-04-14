const projetosButton = document.getElementById('projetos');
const descricaoButton = document.getElementById('descricao');
const container = document.getElementById('container');
const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');
const certificadosButton = document.getElementById('certificados');
const jpButton = document.getElementById('botao-jp');
const contatosButton = document.getElementById('contatos');


projetosButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

descricaoButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});



//switch do eliel (ta salvo)
certificadosButton.addEventListener('click', () => {
	alterarMenu(2);
			} 
	
);

jpButton.addEventListener('click', () => {
	alterarMenu(1);
			} 
	
);

contatosButton.addEventListener('click', () => {
	alterarMenu(3);
			} 
	
);



function alterarMenu (opMenu) {
	switch (opMenu) {
		case 1:
			container.style.display = 'block'
			container1.style.display = 'none'
			container2.style.display = 'none'
			break;
		case 2:
			container.style.display = 'none'
			container1.style.display = 'block'
			container2.style.display = 'none'
			break;
		case 3:
			container.style.display = 'none'
			container1.style.display = 'none'
			container2.style.display = 'block'
			break;		
	
		default:
			break;
	}	
} ;