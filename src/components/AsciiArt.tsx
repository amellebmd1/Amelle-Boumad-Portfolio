const ART = `⠀⠀⠀⠀⠀⠀⠀⣀⠤⠄⠀⠠⠐⠒⠈⠑⠒⠤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢠⠊⠀⠀⠀⠀⠀⢂⠀⠀⠀⠀⠀⠘⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⢂⠀⠀⠀⠀⠀⡇⠀⣀⣀⣀⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠘⣄⠀⠀⠀⠀⠀⠀⠀⡆⠀⠀⠀⣰⡔⠉⠀⠀⠀⠈⠑⡄⠀⠀
⠀⠀⠀⣀⣀⣀⠈⠢⣀⠀⠀⠀⠀⠀⠀⠀⠀⡰⠋⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀
⢀⠞⠁⠀⠀⠀⠈⠑⠬⡓⢄⠀⠀⠀⠘⢀⠜⠁⠀⠀⠀⠀⠀⠀⠀⠀⡘⠀⠀
⢸⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⠷⣄⠀⣄⠎⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢣⠀⠀
⠘⡆⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⣈⡷⠳⢖⡂⠀⠀⠀⠀⠐⠂⠉⠀⠀⠀⢣⠀
⠀⡇⠀⠀⠀⠉⠁⠀⠀⠉⠉⠀⡰⠁⠀⠠⠈⠑⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠆
⠀⢧⠀⠀⠀⠀⠀⠀⠀⠀⢀⡼⠁⠀⠀⠀⢡⠀⠀⠙⢦⢄⠀⠀⠀⠀⣀⠜⠀
⠀⠀⠓⢄⡀⠀⠀⠀⡠⢰⢿⠁⠀⠀⠀⠀⠀⡆⠀⠀⠀⠳⡈⠉⠀⠉⠁⠀⠀
⠀⠀⠀⠀⠀⠉⡩⠋⡔⢡⠃⠀⠀⠀⠀⠀⠀⡿⠀⠀⠀⠀⢃⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⠎⠀⠌⠀⡇⠀⠀⠀⠀⠀⠀⢀⠁⠀⠀⠀⠀⡄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢠⠃⢀⠌⠀⠀⠹⡄⠀⠀⠀⠀⠀⡌⣀⣀⡀⠤⠊⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠧⢄⡘⠀⠀⠀⠀⠈⠑⠂⠐⠒⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`;

const AsciiArt = () => {
  const lines = ART.split('\n');
  return (
    <div className="w-full flex justify-center py-12 px-4">
      <style>{`
        @keyframes ascii-line-in {
          from { opacity: 0; transform: translateY(6px); filter: blur(2px); }
          to   { opacity: 1; transform: translateY(0);   filter: blur(0); }
        }
        @keyframes ascii-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50%      { transform: translateY(-6px) rotate(-0.5deg); }
        }
        .ascii-wrap { animation: ascii-float 6s ease-in-out infinite; animation-delay: 1.6s; }
        .ascii-line {
          opacity: 0;
          animation: ascii-line-in 0.4s ease-out forwards;
        }
      `}</style>
      <pre
        aria-hidden="true"
        className="ascii-wrap text-foreground/80 leading-[1] select-none"
        style={{
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
          fontSize: 'clamp(8px, 1.4vw, 14px)',
          whiteSpace: 'pre',
        }}
      >
        {lines.map((line, i) => (
          <div
            key={i}
            className="ascii-line"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            {line || ' '}
          </div>
        ))}
      </pre>
    </div>
  );
};

export default AsciiArt;