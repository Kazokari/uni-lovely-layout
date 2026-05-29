export type Book = {
  id: string;
  title: string;
  desc: string;
  price: string;
  cover: string;
  category: string;
  collection: string;
  volume: string;
  amazon: string;
  isNew?: boolean;
};

export const collections = [
  { id: "modulacao-terapeutica", name: "Modulação Terapêutica", count: 5 },
  { id: "therapeutic-modulation", name: "Therapeutic Modulation", count: 5 },
  { id: "peptideos-biotecnologia", name: "Peptídeos & Biotecnologia", count: 2 },
  { id: "peptides-biotech", name: "Peptides & Biotech", count: 1 },
  { id: "alma-literaria", name: "Alma Literária", count: 2 },
];

export const books: Book[] = [
  { id: "mod1", title: "Modulação: A Medicina que Conversa com a Biologia", desc: "Coleção Modulação Terapêutica – Livro 1. Uma introdução à medicina que dialoga com a biologia.", price: "R$ 39,99", cover: "https://m.media-amazon.com/images/I/51KE-EdS1NL._AC_UL600_.jpg", category: "Saúde", collection: "modulacao-terapeutica", volume: "Vol. 1", amazon: "https://www.amazon.com.br/dp/B0GWY95X6G" },
  { id: "mod2", title: "Modulação Expandida: Novos Peptídeos e Fronteiras na Medicina Personalizada", desc: "Coleção Modulação Terapêutica – Livro 2. Novos peptídeos e as fronteiras da medicina personalizada.", price: "R$ 39,99", cover: "https://m.media-amazon.com/images/I/61BjB4LuwuL._AC_UL600_.jpg", category: "Saúde", collection: "modulacao-terapeutica", volume: "Vol. 2", amazon: "https://www.amazon.com.br/dp/B0GWYF3FBQ" },
  { id: "mod3", title: "Modulação Profunda: Mecanismos Moleculares e a Ciência de Ponta", desc: "Coleção Modulação Terapêutica – Livro 3. Mecanismos moleculares e ciência de ponta aplicados à prática clínica.", price: "R$ 39,99", cover: "https://m.media-amazon.com/images/I/61YDdIhk0sL._AC_UL600_.jpg", category: "Saúde", collection: "modulacao-terapeutica", volume: "Vol. 3", amazon: "https://www.amazon.com.br/dp/B0GWY8JKB8" },
  { id: "mod4", title: "Modulação Avançada: Protocolos, Evidências e Aplicações Clínicas", desc: "Coleção Modulação Terapêutica – Livro 4. Protocolos baseados em evidências e aplicações clínicas.", price: "R$ 39,99", cover: "https://m.media-amazon.com/images/I/61j5ukFRcSL._AC_UL600_.jpg", category: "Saúde", collection: "modulacao-terapeutica", volume: "Vol. 4", amazon: "https://www.amazon.com.br/dp/B0GWY78KZB" },
  { id: "mod5", title: "Modulação Integrada: O Futuro da Medicina de Precisão", desc: "Coleção Modulação Terapêutica – Livro 5. O futuro da medicina de precisão com terapias combinadas.", price: "R$ 39,99", cover: "https://m.media-amazon.com/images/I/71yNC9aez6L._AC_UL600_.jpg", category: "Saúde", collection: "modulacao-terapeutica", volume: "Novo", isNew: true, amazon: "https://www.amazon.com.br/dp/B0GWYFHQ9X" },
  { id: "tm1", title: "MODULATION: Medicine in Dialogue with Biology", desc: "Therapeutic Modulation Collection – Book 1. An introduction to modulation therapy.", price: "R$ 39,99", cover: "https://m.media-amazon.com/images/I/710KA8ygdQL._AC_UL600_.jpg", category: "Health", collection: "therapeutic-modulation", volume: "Vol. 1", amazon: "https://www.amazon.com.br/dp/B0GWY8JCFH" },
  { id: "tm2", title: "Expanded Modulation: New Peptides and Frontiers in Personalized Medicine", desc: "Therapeutic Modulation Collection – Book 2. New peptides and frontiers in personalized medicine.", price: "R$ 39,99", cover: "https://livraria.unigoyazes.edu.br/images/cover-expanded-modulation-en.jpg", category: "Health", collection: "therapeutic-modulation", volume: "Novo", isNew: true, amazon: "https://www.amazon.com.br/dp/B0GX1Z73JP" },
  { id: "tm3", title: "DEEP MODULATION: Molecular Mechanisms and Cutting-Edge Science", desc: "Therapeutic Modulation Collection – Book 3. Molecular mechanisms and cutting-edge science in clinical practice.", price: "R$ 39,99", cover: "https://livraria.unigoyazes.edu.br/images/cover-deep-modulation-en.jpg", category: "Health", collection: "therapeutic-modulation", volume: "Novo", isNew: true, amazon: "https://www.amazon.com.br/dp/B0GX27DVMR" },
  { id: "tm4", title: "ADVANCED MODULATION: Protocols, Evidence and Clinical Applications", desc: "Therapeutic Modulation Collection – Book 4. Protocols, evidence and clinical applications.", price: "R$ 39,99", cover: "https://livraria.unigoyazes.edu.br/images/cover-advanced-modulation-en.jpg", category: "Health", collection: "therapeutic-modulation", volume: "Vol. 4", amazon: "https://www.amazon.com.br/dp/B0GWYBFGFF" },
  { id: "tm5", title: "INTEGRATED MODULATION: The Future of Precision Medicine", desc: "Therapeutic Modulation Collection – Book 5. The future of precision medicine with combined therapies.", price: "R$ 39,99", cover: "https://livraria.unigoyazes.edu.br/images/cover-integrated-modulation-en.jpg", category: "Health", collection: "therapeutic-modulation", volume: "Novo", isNew: true, amazon: "https://www.amazon.com.br/dp/B0GWYFHQ9X" },
  { id: "pb1", title: "Peptídeos Terapêuticos: Entre a Esperança e a Prudência", desc: "Um guia crítico sobre a nova fronteira da biotecnologia, seus riscos e seu potencial transformador.", price: "R$ 39,99", cover: "https://m.media-amazon.com/images/I/8154AgJ+B3L._AC_UL600_.jpg", category: "Saúde", collection: "peptideos-biotecnologia", volume: "—", amazon: "https://www.amazon.com.br/dp/B0GWY1FKVR" },
  { id: "pb2", title: "A Pequena Chave: Peptídeos, Energia Celular e a Próxima Revolução", desc: "Uma exploração sobre peptídeos, energia celular e a próxima revolução médica.", price: "R$ 39,99", cover: "https://m.media-amazon.com/images/I/71AuxG8FcAL._SX445_.jpg", category: "Saúde", collection: "peptideos-biotecnologia", volume: "Novo", isNew: true, amazon: "https://www.amazon.com.br/dp/B0GX25DHR2" },
  { id: "pbe1", title: "The Small Key: Peptides, Cellular Energy, and the Next Medical Revolution", desc: "An exploration of peptides, cellular energy, and the next medical revolution.", price: "R$ 39,99", cover: "https://m.media-amazon.com/images/I/71ZNXGWhgrL._SY342_.jpg", category: "Health", collection: "peptides-biotech", volume: "Novo", isNew: true, amazon: "https://www.amazon.com.br/dp/B0GX2BSJ1X" },
  { id: "al1", title: "A Alma que Escreve: Poemas, Versos, Prosas e Amenidades", desc: "Poemas, versos, prosas e amenidades — uma obra literária que expressa sensibilidade e reflexão.", price: "R$ 39,99", cover: "https://m.media-amazon.com/images/I/81dHrvJZioL._AC_UL600_.jpg", category: "Literatura", collection: "alma-literaria", volume: "—", amazon: "https://www.amazon.com.br/dp/B0GWY7K5MG" },
  { id: "al2", title: "The Soul That Writes: Poems, Reflections, and Quiet Moments", desc: "Poems, reflections, and quiet moments of the human experience.", price: "R$ 39,99", cover: "https://m.media-amazon.com/images/I/71Sc+vFbj-L._AC_UL600_.jpg", category: "Literature", collection: "alma-literaria", volume: "—", amazon: "https://www.amazon.com.br/dp/B0GWYJZ4TT" },
];
