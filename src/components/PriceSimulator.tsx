import { useState } from "react";
import Button from "@/components/Button";

interface PriceSimulatorProps {
  onClose: () => void; // Prop para fechar o modal
}

const PriceSimulator: React.FC<PriceSimulatorProps> = ({ onClose }) => {
  const [numPages, setNumPages] = useState<number | "">("");
  const [pageType, setPageType] = useState<"Simples" | "Média" | "Complexa">("Simples");
  const [urgency, setUrgency] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    if (!numPages || numPages <= 0) {
      setResult(null);
      return;
    }

    const hourlyRate = 15; // Valor fixo por hora
    const hoursPerPage = {
      Simples: 1,
      Média: 2,
      Complexa: 3,
    };

    const urgencyFactor = 1 + urgency / 100; // Fator de multiplicação com base no prazo
    const total = hourlyRate * numPages * hoursPerPage[pageType] * urgencyFactor;
    setResult(total);
  };

  const pageDescriptions = {
    Simples: "React básico e CSS básico.",
    Média: "React, Tailwind com responsividade completa.",
    Complexa: "Animações, React e Tailwind avançado.",
  };

  return (
    <div className="bg-gray-900 p-8 rounded-xl shadow-xl max-w-lg w-full">
      <h3 className="text-3xl font-extrabold text-center mb-4">Simulador de Preço</h3>
      <p className="text-gray-400 text-center mb-2 text-sm">
        <strong className="text-white">Fórmula:</strong>{" "}
        Valor Total = R$15/hora x Número de Páginas x Horas por Página x Prazo
      </p>
      <p className="text-gray-500 text-center mb-6 text-xs">
        * R$15 é o valor fixo por hora
      </p>

      {/* Número de Páginas */}
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Número de Páginas</label>
        <input
          type="number"
          value={numPages}
          onChange={(e) => setNumPages(Number(e.target.value) || "")}
          placeholder="Insira o número de páginas"
          className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg text-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Tipo de Página */}
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Tipo de Página</label>
        <select
          value={pageType}
          onChange={(e) => setPageType(e.target.value as "Simples" | "Média" | "Complexa")}
          className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg text-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Simples">Simples</option>
          <option value="Média">Média</option>
          <option value="Complexa">Complexa</option>
        </select>
        <p className="text-sm text-gray-400 mt-1">{pageDescriptions[pageType]}</p>
      </div>

      {/* Prazo */}
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Prazo do Projeto</label>
        <select
          onChange={(e) => setUrgency(Number(e.target.value))}
          className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg text-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value={0}>3 meses (sem taxa)</option>
          <option value={10}>2 meses (10% a mais)</option>
          <option value={20}>1 mês e meio (20% a mais)</option>
          <option value={30}>1 mês (30% a mais)</option>
          <option value={50}>2 semanas (50% a mais)</option>
        </select>
      </div>

      {/* Botões */}
      <div className="flex justify-between mt-6">
        <Button variant="secondary" onClick={onClose}>
          Fechar
        </Button>
        <Button onClick={handleCalculate}>Calcular</Button>
      </div>

      {/* Resultado */}
      {result !== null && (
        <div className="mt-6 bg-gray-800 text-white p-4 rounded-md text-center">
          <p className="text-lg font-bold">Valor Total: R${result.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default PriceSimulator;
