import Cabecalho from "./cabecalho";
import Rodape from "./Rodape";

export default function Pagina(props: any) {
  return (
    <div className="flex flex-col h-screen">
      <Cabecalho />
      <main className="flex-1 py-16 container w-full">{props.children}</main>
      <Rodape />
    </div>
  );
}
