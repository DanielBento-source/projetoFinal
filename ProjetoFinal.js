const prompt = require("prompt-sync")();

function saudacao() {
  console.log(" Seja bem vindo(a), ao Changes Magic! ");

  let nome = prompt("Digite seu nome ");

  console.log(`Ola ${nome}, agora você faz parte da Terra do Amanhecer `);

  console.log(
    `${nome} como todo bom aluno de magia, começamos aprender a Magia da Agua, a mais simples, e assim que você subir de nivel poderá explorar toda terra do amanhecer e tambem aprender outros tipos de magia! `
  );
}
let lutaOponente = { habilidades: [], poder: 20, vida: 100 };
var descanso = 1;
let lutaStatus = { habilidades: [], poder: 20, vida: 100 };
let nomes = {
  agua: ["Terry Baiacu", "Dieguinho Boca de Jiboia", "Marinhos Man"],
  fogo: ["John Piromaniaco", "Deltan Fogueteiro", "Fogareiro Man"],
  eletrico: ["David Eletrico", "Eletric Chakal", "Shock Bradoks"],
};
let oponenteNivel;
let oponente;
let oponenteAtual;
let localAtual;
let batalha = { poder: 0, vida: 0 };
let batalhaOp = { poder: 0, vida: 0 };
let status = {
  periodo: [
    "Alvorada",
    "Solar",
    "Ocaso",
    "Crepusculo",
    "Dark-Cold",
    "Descanso",
  ],
  nivel: 1,
  energia: 5,
  experiencia: 0,
  dia: 1,
  acoes: 1,
  pontosMagia: 100,
  locais: [
    "Academia de Magia da Agua",
    "Academia de Magia do Fogo",
    "Academia de Magia do Relampago",
  ],

  contadorEnergia: function () {
    this.energia = this.energia - 1;
  },

  zerarEnergia: function () {
    this.energia = 0;
  },

  contadorExperiencia: function (a) {
    this.experiencia = this.experiencia + a;
  },

  descanso: function () {
    this.energia = 5;
    this.dia = this.dia + 1;
    this.acoes = 1;
  },

  proxima: function () {
    this.acoes = this.acoes + 1;
  },
};

function batalha1() {
  batalha.poder = lutaStatus.poder;
  batalha.vida = lutaStatus.vida;
  batalhaOp.poder = lutaOponente.poder;
  batalhaOp.vida = lutaOponente.vida;
}

function sobeNivel() {
  if (status.experiencia >= 200) {
    status.nivel = status.nivel + 1;
    lutaStatus.vida = lutaStatus.vida + 200;
    lutaStatus.poder = lutaStatus.poder + 20;
    status.experiencia = 0;
  }
}

if (status.acoes == 1) {
  localAtual = status.locais[0];
}
if (localAtual == status.locais[0]) {
  oponenteNivel = 1;
  oponente = Math.floor(Math.random() * nomes.agua.length);
  oponenteAtual = nomes.agua[oponente];
  lutaOponente.habilidades.push("Agua Suprema!");
  lutaOponente.vida = 100;
  lutaOponente.poder = 20;
}
if (localAtual == status.locais[1]) {
  oponenteNivel = 6;
  oponente = Math.floor(Math.random() * nomes.fogo.length);
  oponenteAtual = nomes.fogo[oponente];
  lutaOponente.habilidades.splice(0, 1, "Chama Divina!");
  lutaOponente.Vida = 100 * oponenteNivel;
  lutaOponente.poder = 20 * oponenteNivel;
} if (localAtual == status.locais[2]) {
  oponenteNivel = 11;
  oponente = Math.floor(Math.random() * nomes.eletrico.length);
  oponenteAtual = nomes.eletrico[oponente];
  lutaOponente.habilidades.splice(0, 1, "Electrucutu!");
  lutaOponente.Vida = 100 * oponenteNivel;
  lutaOponente.poder = 20 * oponenteNivel;
}

function trocaLugar() {
  if (localAtual == status.locais[0] && q1 == 3) {
    console.log("pra onde você quer ir ?");
    console.log(`1 - ${status.locais[1]}`);
    console.log(`2 - ${status.locais[2]}`);
    let qLocal = +prompt();
    if (qLocal == 1) {
      status.proxima();
      localAtual = status.locais[1];
    } else if (qLocal == 2) {
      status.proxima();
      localAtual = status.locais[2];
    }
  } else if (localAtual == status.locais[1] && q1 == 3) {
    console.log("pra onde você quer ir ?");
    console.log(`1 - ${status.locais[0]}`);
    console.log(`2 - ${status.locais[2]}`);
    let qLocal = +prompt();
    if (qLocal == 1) {
      localAtual = status.locais[0];
      status.proxima();
    } else if (qLocal == 2) {
      localAtual = status.locais[2];
      status.proxima();
    } 
  }else if (localAtual == status.locais[2] && q1 == 3) {
      console.log("pra onde você quer ir ?");
      console.log(`1 - ${status.locais[0]}`);
      console.log(`2 - ${status.locais[1]}`);
      let qLocal = +prompt();
      if (qLocal == 1) {
        localAtual = status.locais[0];
        status.proxima();
      } else if (qLocal == 2) {
        localAtual = status.locais[1];
        status.proxima();
      }
    }
}

function vezOponente() {
  console.log(
    `status da batalha: vida: ${batalhaOp.vida} poder: ${batalhaOp.poder}`
  );
  console.log(`Ataque ${lutaOponente.habilidades[0]}`);
  batalha.vida = batalha.vida - batalhaOp.poder;
}
function descansoOp() {
  batalhaOp.vida = lutaOponente.vida;
}

function luta() {
  descansoOp();
  console.log(`Você iras batalhar contra o ${oponenteAtual}`);
  console.log("Status do oponente: ");
  console.log(`Nivel: ${oponenteNivel}`);
  console.log(`vida: ${lutaOponente.vida}`);
  console.log(`Poder: ${lutaOponente.poder}`);
  console.log(`Habilidades: ${lutaOponente.habilidades[0]}`);
  console.log();
  console.log("começou a batalha!");
  console.log();
  do {
    console.log(
      `status da batalha: vida: ${batalha.vida} poder: ${batalha.poder}`
    );
    console.log("sua vez");
    console.log("1 - Ataque!");
    let l1 = +prompt();
    if (l1 == 1) {
      console.log(`Ataque ${lutaStatus.habilidades[0]}`);
      batalhaOp.vida = batalhaOp.vida - batalha.poder;
    }
    if (batalhaOp.vida <= 0) {
      console.log();
      console.log("você venceu parabens! e ganhou 25 pontos de experiencia");
      status.contadorExperiencia(25);
      status.proxima(1);
      status.contadorEnergia();
      break;
    } else if (batalha.vida <= 0) {
      console.log();
      console.log("que pena, você perdeu! agora precisa repor as energias");
      status.zerarEnergia();
      break;
    }
    console.log();
    console.log("Vez do oponente");
    vezOponente();
    if (batalhaOp.vida <= 0) {
      console.log();
      console.log("você venceu parabens! e ganhou 25 pontos de experiencia");
      status.contadorExperiencia(25);
      status.proxima(1);
      status.contadorEnergia();
      break;
    } else if (batalha.vida <= 0) {
      console.log();
      console.log("que pena, você perdeu! agora precisa repor as energias");
      status.zerarEnergia();
      break;
    } else if (batalha.vida <= 0 && batalhaOp.vida <= 0) {
      console.log();
      console.log("deu empate.");
      status.proxima(1);
      status.contadorEnergia();
      break;
    }
    console.log();
  } while (
    batalha.vida > 0 ||
    batalhaOp.vida > 0 ||
    (batalha.vida > 0 && batalhaOp.vida > 0)
  );
}

do {

  sobeNivel();
  batalha1();
  if (status.acoes == 1 && status.energia >= 1) {
    console.clear();
    if (status.dia == 1) {
      saudacao();
    }
    console.log();
    console.log("Novo Status: ");
    console.log();
    console.log(`Dia: ${status.dia}`);
    console.log(`Local: ${status.locais[0]}`);
    console.log(`Periodo: ${status.periodo[status.acoes - 1]}`);
    console.log(`Nivel ${status.nivel}`);
    console.log(`Experiencia: ${status.experiencia}`);
    console.log(`Energia: ${status.energia}`);
    console.log("o que deseja fazer? ");
    console.log();

    if (status.dia == 1) {
      console.log("1 - aprender Magia da Agua. ");
      q1 = +prompt();
      if (q1 == 1) {
        lutaStatus.habilidades.push("Agua Suprema");
        console.log(" Parabens! você aprendeu a magia da Agua. ");
        console.log(" Agua Suprema disponivel em suas habilidades ");
        console.log(" Você ganhou 25 pontos de experiencia ");
        status.contadorExperiencia(25);
        sobeNivel();
        status.contadorEnergia();
        status.proxima(1);
      }
    }

    if (status.dia > 1 && status.energia > 1 && status.nivel < 5) {
      console.log("1 - praticar ");
      console.log("2 - descansar ");
      console.log("3 - ir para outro lugar ");
      q1 = +prompt();
      if (q1 == 1) {
        luta();
      } else if (q1 == 2) {
        status.zerarEnergia();
      } else if (q1 == 3) {
        trocaLugar();
      }
    }
  }

  if (status.acoes == 2 && status.energia >= 1) {
    console.log();
    console.log("Novo Status: ");
    console.log();
    console.log(`Dia: ${status.dia}`);
    console.log(`Local: ${localAtual}`);
    console.log(`Periodo: ${status.periodo[status.acoes - 1]}`);
    console.log(`Nivel: ${status.nivel}`);
    console.log(`Experiencia: ${status.experiencia}`);
    console.log(`Energia: ${status.energia}`);
    console.log("o que deseja fazer? ");
    console.log();
    console.log("1 - praticar ");
    console.log("2 - descansar ");
    console.log("3 - ir para outro lugar ");
    q1 = +prompt();
    if (q1 == 1) {
      luta();
    } else if (q1 == 2) {
      status.zerarEnergia();
    } else if (q1 == 3) {
      trocaLugar();
    }
  }

  if (status.acoes == 3 && status.energia >= 1) {
    console.log();
    console.log("Novo Status: ");
    console.log();
    console.log(`Dia: ${status.dia}`);
    console.log(`Local: ${localAtual}`);
    console.log(`Periodo: ${status.periodo[status.acoes - 1]}`);
    console.log(`Nivel ${status.nivel}`);
    console.log(`Experiencia: ${status.experiencia}`);
    console.log(`Energia: ${status.energia}`);
    console.log("o que deseja fazer? ");
    console.log();
    console.log("1 - praticar ");
    console.log("2 - descansar ");
    console.log("3 - ir para outro lugar ");
    q1 = +prompt();
    if (q1 == 1) {
      luta();
    } else if (q1 == 2) {
      status.zerarEnergia();
    } else if (q1 == 3) {
      trocaLugar();
    }
  }

  if (status.acoes == 4 && status.energia >= 1) {
    console.log();
    console.log("Novo Status: ");
    console.log();
    console.log(`Dia: ${status.dia}`);
    console.log(`Local: ${localAtual}`);
    console.log(`Periodo: ${status.periodo[status.acoes - 1]}`);
    console.log(`Nivel ${status.nivel}`);
    console.log(`Experiencia: ${status.experiencia}`);
    console.log(`Energia: ${status.energia}`);
    console.log("o que deseja fazer? ");
    console.log();
    console.log("1 - praticar ");
    console.log("2 - descansar ");
    console.log("3 - ir para outro lugar ");
    q1 = +prompt();
    if (q1 == 1) {
      luta();
    } else if (q1 == 2) {
      status.zerarEnergia();
    } else if (q1 == 3) {
      trocaLugar();
    }
  }

  if (status.acoes == 5 && status.energia >= 1) {
    console.log();
    console.log("Novo Status: ");
    console.log();
    console.log(`Dia: ${status.dia}`);
    console.log(`Local: ${localAtual}`);
    console.log(`Periodo: ${status.periodo[status.acoes - 1]}`);
    console.log(`Nivel ${status.nivel}`);
    console.log(`Experiencia: ${status.experiencia}`);
    console.log(`Energia: ${status.energia}`);
    console.log("o que deseja fazer? ");
    console.log();
    console.log("1 - praticar ");
    console.log("2 - descansar ");
    console.log("3 - ir para outro lugar ");
    q1 = +prompt();
    if (q1 == 1) {
      luta();
    } else if (q1 == 2) {
      status.zerarEnergia();
    } else if (q1 == 3) {
      trocaLugar();
    }
  }

  if (
    status.acoes > 5 ||
    status.energia < 1 ||
    (status.acoes > 5 && status.energia < 1)
  ) {
    console.log();
    console.log("Novo Status: ");
    let tarde = " Já é tarde";
    let esgotado = "você esta sem energia";
    if (status.acoes > 5 && status.energia < 1) {
      console.log(`${tarde} e ${esgotado}`);
    } else if (status.energia < 1) {
      console.log(esgotado);
    } else if (status.acoes > 5) {
      console.log(tarde);
    }
    console.log("1 - Vá descansar");
    descanso = +prompt();
  }
  if (descanso == 1) {
    status.descanso();
  }
} while (descanso == 1);

