ETEC Professor Hor�cio Augusto da Silveira
Avalia��o de Design Digital � Segundo Bimestre � Usabilidade e Padr�es de Projeto

Nome:Alex Sandro Miranda__________________________________________________________



private void btnbanana_Click(object sender, EventArgs e)
{
    double BANANA;
    double CHOPPE;
    double guarana;
    string rguarana;
    try
    {
        BANANA = Convert.ToDouble(txtBANANA.Text);
        guarana = Math.Sqrt(BANANA);
        rguarana = Convert.ToString(guarana);
        rguarana = txtResultado.Text;
    }
    catch (FormatException)
    {
        MessageBox.Show("Formata��o Errada.");
    }
}


1.	Organize o c�digo acima segundo o que foi explicado nas aulas de t�cnicas de programa��o afim de garantir 
	legibilidade e sustentabilidade do c�digo.

2.	Desenhe uma classe que implemente o c�digo acima como um m�todo.

banana()
guarana()
rguarana()
_________
incluir+
somar()
concatenar()



 
