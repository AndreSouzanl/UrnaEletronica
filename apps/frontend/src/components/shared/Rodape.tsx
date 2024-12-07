export default function Rodape() {
  return (
    <footer className="flex justify-center items-center h-20 bg-zinc-950 p-5">
      <p>
        desenvolvido por André souza - Todos os direitos reservados &copy;
        {new Date().getFullYear()}{" "}
      </p>
    </footer>
  );
}
