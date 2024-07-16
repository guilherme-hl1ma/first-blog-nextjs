import { Paragraph } from '@/domain/posts/post';

export const convertParagraphsToMarkdown = (
  paragraphs: Paragraph[],
): string => {
  return paragraphs
    .map((paragraph) => {
      return paragraph.children.map((textNode) => textNode.text).join(' ');
    })
    .join('\n\n'); // Adiciona uma quebra de linha entre parágrafos
};
