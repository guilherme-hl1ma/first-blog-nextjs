export const removeMarkdown = (markdown: string): string => {
  let data = markdown.replace(/(\*\*|__)(.*?)\1/g, ''); // Negrito
  data = data.replace(/(\*|_)(.*?)\1/g, ''); // Itálico
  data = data.replace(/~~(.*?)~~/g, ''); // Tachado
  data = data.replace(/`(.*?)`/g, ''); // Inline code
  data = data.replace(/```[\s\S]*?```/g, ''); // Bloco de código
  data = data.replace(/(#+)(.*)/g, ''); // Títulos
  data = data.replace(/!\[.*?\]\(.*?\)/g, ''); // Imagens
  data = data.replace(/\[.*?\]\(.*?\)/g, ''); // Links
  data = data.replace(/> (.*?)(\n|$)/g, ''); // Bloco de citação
  data = data.replace(/- (.*?)(\n|$)/g, ''); // Listas não ordenadas
  data = data.replace(/\d+\.\s+(.*?)(\n|$)/g, ''); // Listas ordenadas
  data = data.replace(/\n\s*\n/g, '\n'); // Linhas vazias
  return data; // Remove espaços em branco no início e no final
};
