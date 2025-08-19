import Image from "next/image";

export default function Home() {
  return (
    <section className="paginaInicial">
    <div>
      <Image
      src="/banner.jpg"
      width={1400}
      height={500}
      alt="banner"
      className="m-2"
      />
    </div>
      <section className="logo">


      <img src="https://cdn2.steamgriddb.com/logo_thumb/915464a6b655320681a2a2557623a88c.png" alt="" />

      </section>

      <section className="sobre">
      <h1 className="oh1">Sobre o jogo</h1>
      <br /><br />
      <p> * Undertale Yellow é um fan game gratuito que serve como prequel ao jogo original Undertale, criado por fãs e desenvolvido por uma equipe liderada por Master Sword usando GameMaker: Studio. O desenvolvimento começou em 2016 e durou cerca de 7 anos, com o lançamento completo em 9 de dezembro de 2023, seguido de atualizações até julho de 2025.</p>
      <br /><br />
      <p> * No jogo, você controla Clover, a sétima criança humana a cair no Underground (o mundo subterrâneo onde monstros estão presos após uma guerra com humanos). A alma de Clover é amarela, representando justiça. A jogabilidade é um RPG por turnos similar ao Undertale, com exploração de áreas, resolução de puzzles, batalhas em estilo bullet hell onde você pode lutar ou poupar inimigos, e mecânicas únicas como mirar com uma arma de brinquedo. Há três rotas principais: Neutral, Pacifist e Genocide, que afetam o progresso.</p>
      <br /><br />
      <p> * O jogo é elogiado por sua fidelidade ao original, trilha sonora, arte e narrativa, sendo considerado por muitos uma obra-prima entre fan games. Está disponível para download gratuito em plataformas como Game Jolt.</p>
      </section>
    </section>
  );
} 
