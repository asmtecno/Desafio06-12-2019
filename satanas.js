ETEC Professor Horácio Augusto da Silveira
Avaliação de Design Digital – Segundo Bimestre – Usabilidade e Padrões de Projeto

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
        MessageBox.Show("Formatação Errada.");
    }
}


1.	Organize o código acima segundo o que foi explicado nas aulas de técnicas de programação afim de garantir 
	legibilidade e sustentabilidade do código.

2.	Desenhe uma classe que implemente o código acima como um método.

banana()
guarana()
rguarana()
_________
incluir+
somar()
concatenar()



 
