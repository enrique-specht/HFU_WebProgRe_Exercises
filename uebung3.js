class Kraftfahrzeug {
  #maxGeschw;
  istAn = false;
  #richtung = "n";
  aktuelleGeschw = 0;

  constructor(maxGeschw) {
    this.#maxGeschw = maxGeschw;
  }

  an() {
    this.istAn = true;
    console.log(this.istAn);
  }

  aus() {
    this.istAn = false;
    console.log(this.istAn);
  }

  gasgeben() {
    this.aktuelleGeschw < this.#maxGeschw
      ? (this.aktuelleGeschw += 1)
      : this.#maxGeschw;
    console.log(this.aktuelleGeschw);
  }

  bremsen() {
    this.aktuelleGeschw > 0 ? (this.aktuelleGeschw -= 1) : 0;
    console.log(this.aktuelleGeschw);
  }

  richtung(r) {
    this.#richtung = r;
    console.log(this.#richtung);
  }

  print() {
    console.log(
      "Maximale Geschwindigkeit: " +
        this.#maxGeschw +
        "\nAn: " +
        this.istAn +
        "\nRichtung: " +
        this.#richtung +
        "\nAktuelle Geschwindigkeit: " +
        this.aktuelleGeschw
    );
  }
}

class Auto extends Kraftfahrzeug {
  #tueren;
  #hatDachfenster;

  constructor(maxGeschw, tueren, hatDachfenster) {
    super(maxGeschw);
    this.#tueren = tueren;
    this.#hatDachfenster = hatDachfenster;
  }

  print() {
    super.print();
    console.log(
      "Türen: " +
        this.#tueren +
        "\nDachfenster vorhanden: " +
        this.#hatDachfenster
    );
  }
}

const auto = new Auto(200, 4, true);
auto.istAn = true;
auto.richtung("vorwärts");
auto.gasgeben();
auto.gasgeben();
auto.gasgeben();
auto.bremsen();
auto.print();
