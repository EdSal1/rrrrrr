import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Image, Dimensions, TouchableOpacity, Linking, Modal, Alert } from 'react-native';

const { width } = Dimensions.get('window');

const logoImages = {
  essalud: require('../assets/images/essalud.png'),
  minsa: require('../assets/images/minsa.png'),
  world: require('../assets/images/planeta.jpg'),
};

const enfermedades = [
  {
    diagnostico: 'GUIAS DE PRACTICA CLINICA',
    cie10: '----',
    logos: [
      { nombre: 'EsSalud', año: '', url: 'https://gpc-peru.com/' },
      { nombre: 'Minsa', año: '', url: 'https://gpc-peru.com/' },
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' }
    ]
  },
  {
    diagnostico: 'Resfrío común',
    cie10: 'J00X',
    logos: [
      { nombre: 'EsSalud', año: '2017 Niños', url: 'https://www.essalud.gob.pe/downloads/guias_emergencia_epidemiologica/comp_recomendac_manej_enferm_emergencia2017.pdf' },
      { nombre: 'MINSA', año: '2019 Niños', url: 'https://portal.insnsb.gob.pe/docs-trans/resoluciones/archivopdf.php?pdf=2019/RD%20N%C2%B0%20000260-2019-DG-INSNSB%20INFECCIONES%20AGUDAS%20DE%20LAS%20V%C3%8DAS%20RESPIRATORIAS%20SUPERIORES.pdf' },
      { nombre: 'World', año: '', url: 'https://medicalguidelines.msf.org/en/viewport/CG/english/rhinitis-and-rhinopharyngitis-common-cold-16689197.html' }
    ]
  },

  { 
    diagnostico: 'Diarrea infecciosa', 
    cie10: 'A09X', 
    logos: [
      { nombre: 'EsSalud', año: '2006', url: 'https://www.essalud.gob.pe/downloads/guias_emergencia_epidemiologica/guias_EDAs_IRAs.pdf' },
      { nombre: 'MINSA', año: '2022', url: 'https://portal.insnsb.gob.pe/docs-trans/resoluciones/archivopdf.php?pdf=2022/RD%20N%C2%B0%20000101-2022-DG-INSNSB%20DIAGN%C3%93STICO%20Y%20TRATAMIENTO%20DE%20DIARREA%20AGUDA%20INFECCIOSA.pdf' },
      { nombre: 'World', año: '2017', url: 'https://www.idsociety.org/practice-guideline/infectious-diarrhea/#RecommendationsAbridged' }
    ]
  },
  { 
    diagnostico: 'Faringitis aguda', 
    cie10: 'J029', 
    logos: [
      { nombre: '',año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: 'MINSA', año: '2018 HNAL p88', url: 'https://cdn.www.gob.pe/uploads/document/file/4306167/RD%20N%C2%B0051-HNAL-D-2019.pdf.pdf' },
      { nombre: 'World', año: '2023', url: 'https://link.springer.com/article/10.1007/s00431-023-05211-w' }
    ]
  },
  { 
    diagnostico: 'Sinusitis', 
    cie10: 'J019', 
    logos: [
      { nombre: 'EsSalud', año: '2022 🎥', url: 'https://repositorio.essalud.gob.pe/handle/20.500.12959/2958' },
      { nombre: 'MINSA', año: '2018 HNAL p41', url: 'https://cdn.www.gob.pe/uploads/document/file/4306167/RD%20N%C2%B0051-HNAL-D-2019.pdf.pdf' },
      { nombre: 'World', año: '2015', url: 'https://aao-hnsfjournals.onlinelibrary.wiley.com/doi/epdf/10.1177/0194599815574247' }
    ]
  },
    { 
    diagnostico: 'Otitis media aguda', 
    cie10: 'H659', 
    logos: [
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: 'MINSA', año: '2018 HNAL p29', url: 'https://cdn.www.gob.pe/uploads/document/file/4306167/RD%20N%C2%B0051-HNAL-D-2019.pdf.pdf' },
      { nombre: 'World', año: '2021', url: 'https://www.rch.org.au/clinicalguide/guideline_index/acute_otitis_media/' }
    ]
  },
  { 
    diagnostico: 'Neumonía bacteriana', 
    cie10: 'J159', 
    logos: [
      { nombre: 'EsSalud', año: '2023 🎥', url: 'https://repositorio.essalud.gob.pe/handle/20.500.12959/3410' },
      { nombre: 'MINSA', año: '2022 HNAL p56', url: 'https://cdn.www.gob.pe/uploads/document/file/3591648/R.D.N%C2%BA%20213-HNAL-D-2022%20%282%29.pdf.pdf' },
      { nombre: 'World', año: '2019', url: 'https://www.idsociety.org/practice-guideline/community-acquired-pneumonia-cap-in-adults/' }
    ]
  },
  { 
    diagnostico: 'Infección urinaria', 
    cie10: 'N390', 
    logos: [
      { nombre: 'EsSalud', año: '2019', url: 'https://ietsi.essalud.gob.pe/wp-content/uploads/2021/11/GPC-ITU_Version-Corta.pdf' },
      { nombre: 'MINSA', año: '2021', url: 'https://cdn.www.gob.pe/uploads/document/file/2586936/RD%20269-GPC%20para%20DXyTTO%20Infec%20Tracto%20Urinario-EMERG-29Nov-21.pdf.pdf' },
      { nombre: 'World', año: '2024', url: 'https://www.ajkd.org/action/showPdf?pii=S0272-6386%2823%2900837-5' }
    ]
  },
  { 
    diagnostico: 'Fiebre tifoidea', 
    cie10: 'A010', 
    logos: [
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: 'MINSA', año: '2016 p186', url: 'https://bvs.minsa.gob.pe/local/minsa/4229.pdf' },
      { nombre: 'World', año: '2024', url: 'https://www.ncbi.nlm.nih.gov/books/NBK557513/' }
    ]
  },
  { 
    diagnostico: 'Hepatitis A', 
    cie10: 'B150', 
    logos: [
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: 'MINSA', año: '2012 INSN', url: 'https://www.hnhu.gob.pe/Inicio/wp-content/uploads/2016/07/NORMA_TECNICA_Guia-Clinica.pdf' },
      { nombre: 'World', año: '2024', url: 'https://www.cdc.gov/hepatitis-a/hcp/clinical-care/index.html' }
    ]
  },
  { 
    diagnostico: 'Mialgia', 
    cie10: 'M791', 
    logos: [
      { nombre: 'EsSalud', año: '2022 🎥', url: 'https://repositorio.essalud.gob.pe/handle/20.500.12959/3265' },
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' }
    ]
  },
  { 
    diagnostico: 'Artrosis', 
    cie10: 'M199', 
    logos: [
      { nombre: 'EsSalud', año: '2018 IETSI', url: 'https://www.essalud.gob.pe/ietsi/pdfs/guias/GPC_Osteoartritis_v_corta.pdf' },
      { nombre: 'MINSA', año: '2023 HEVES', url: 'https://cdn.www.gob.pe/uploads/document/file/5410488/4838515-guia-de-practica-clinica-para-el-diagnostico-y-tratamiento-de-osteoartrosis.pdf?v=1699653536' },
      { nombre: 'World', año: '2019', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11488261/' }
    ]
  },
  { 
    diagnostico: 'Lumbago', 
    cie10: 'M545', 
    logos: [
      { nombre: 'EsSalud', año: '2016 IETSI', url: 'http://www.scielo.org.pe/scielo.php?script=sci_arttext&pid=S1025-55832018000400014' },
      { nombre: 'MINSA', año: '2022 HNAL', url: 'https://cdn.www.gob.pe/uploads/document/file/3156957/R.D.N%C2%BA%20130-2022-DG-HNAL.pdf.pdf' },
      { nombre: 'World', año: '2020', url: 'https://www.jospt.org/doi/pdf/10.2519/jospt.2021.0304' }
    ]
  },
  { 
    diagnostico: 'Cervicalgia', 
    cie10: 'M542', 
    logos: [
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: 'World', año: '2017', url: 'https://www.jospt.org/doi/10.2519/jospt.2017.0302' }
    ]
  },
  { 
    diagnostico: 'Osteopenia', 
    cie10: 'M819', 
    logos: [
      { nombre: 'EsSalud', año: '2011', url: 'https://repositorio.essalud.gob.pe/bitstream/handle/20.500.12959/664/113.%20Gu%c3%ada%20osteoporosis.pdf?sequence=1&isAllowed=y' },
      { nombre: 'MINSA', año: '2021 HNAL', url: 'https://cdn.www.gob.pe/uploads/document/file/2661695/RD%20267-GPC%20DXyTTO%20OSTEOPOROSIS.pdf.pdf' },
      { nombre: 'World', año: '2020', url: 'https://www.sciencedirect.com/science/article/pii/S1530891X20428277' }
    ]
  },
  { 
    diagnostico: 'HTA Hipertension', 
    cie10: 'I10X', 
    logos: [
      { nombre: 'EsSalud', año: '2022 IETSI', url: 'https://ietsi.essalud.gob.pe/wp-content/uploads/2022/12/GPC-HTA-esencial_Version-corta.pdf' },
      { nombre: 'MINSA', año: '2015', url: 'https://www.saludarequipa.gob.pe/salud_personas/archivos/GPC%202015/RM031-2015-MINSA%20Dx%20tratamiento%20y%20Control%20de%20la%20Enfermedada%20Hipertensiva.pdf' },
      { nombre: 'World', año: '2020', url: 'https://www.ahajournals.org/doi/10.1161/HYPERTENSIONAHA.120.15026' }
    ]
  },
  { 
    diagnostico: 'DM2 Diabetes', 
    cie10: 'E119', 
    logos: [
      { nombre: 'EsSalud', año: '2015 IETSI', url: 'https://www.essalud.gob.pe/ietsi/pdfs/guias/aGuia_practica_clinica_para_diagnostico_tratamiento_control_de_diabetes_mellitus_tipo_2.pdf' },
      { nombre: 'MINSA', año: '2016', url: 'https://bvs.minsa.gob.pe/local/MINSA/3466.pdf' },
      { nombre: 'World', año: '2020', url: 'https://professional.diabetes.org/standards-of-care' }
    ]
  },
  { 
    diagnostico: 'Dislipidemias', 
    cie10: 'E789', 
    logos: [
      { nombre: 'EsSalud', año: '2022 🎥', url: 'https://professional.diabetes.org/standards-of-care' },
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: 'World', año: '2019', url: 'https://academic.oup.com/eurheartj/article/41/1/111/5556353?login=false' }
    ]
  },
  { 
    diagnostico: 'Insomnio', 
    cie10: 'F510', 
    logos: [
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: 'MINSA', año: '2016 INSN', url: 'https://bibliotecavirtual.insnsb.gob.pe/guia-de-practica-clinica-sobre-trastornos-del-sueno-en-la-infancia-y-adolescencia-en-atencion-primaria/'},
      { nombre: 'World', año: '2023', url: 'https://onlinelibrary.wiley.com/doi/10.1111/jsr.14035' }
    ]
  },
  { 
    diagnostico: 'Ansiedad', 
    cie10: 'F419', 
    logos: [
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: 'MINSA', año: '2022', url: 'https://cdn.www.gob.pe/uploads/document/file/5665448/5019202-guia-de-practica-clinica-para-el-diagnostico-y-tratamiento-del-transtorno-de-ansiedad-generalizada-en-el-adulto.pdf?v=1705010046' },
      { nombre: 'World', año: '2014', url: 'https://bmcpsychiatry.biomedcentral.com/articles/10.1186/1471-244X-14-S1-S1' }
    ]
  },
  { 
    diagnostico: 'Problemas de Alcohol', 
    cie10: 'F101', 
    logos: [
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: 'MINSA', año: '2022 HNAL', url: 'https://cdn.www.gob.pe/uploads/document/file/3871893/RD%20N%C2%B0292-HNAL-D-2022.pdf.pdf' },
      { nombre: 'World', año: '2023', url: 'https://www.cmaj.ca/content/195/40/E1364' }
    ]
  },
  { 
    diagnostico: 'Episodio Depresivo', 
    cie10: 'F329', 
    logos: [
      { nombre: 'EsSalud', año: '2023 IETSI', url: 'https://ietsi.essalud.gob.pe/wp-content/uploads/2023/12/GPC-Episodio-depresivo-moderado-a-severo_V.-Corta.pdf' },
      { nombre: 'MINSA', año: '2023', url: 'https://bvs.minsa.gob.pe/local/MINSA/6597.pdf' },
      { nombre: 'World', año: '2019', url: 'https://www.apa.org/depression-guideline' }
    ]
  },
  { 
    diagnostico: 'Esquizofrenia', 
    cie10: 'F209', 
    logos: [
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: 'MINSA', año: '2017 HNVH', url: 'https://repositorio.ins.gob.pe/bitstream/handle/20.500.14196/1155/Gu%c3%ada%20de%20Pr%c3%a1ctica%20Cl%c3%adnica%20para%20el%20Abordaje%20Temprano%20y%20Manejo%20de%20Esquizofrenia_HVLH-c.pdf?sequence=1&isAllowed=y' },
      { nombre: 'World', año: '2020', url: 'https://psychiatryonline.org/doi/full/10.1176/appi.ajp.2020.177901' }
    ]
  },
  
  { 
    diagnostico: 'Demencia', 
    cie10: 'F00X', 
    logos: [
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: 'MINSA', año: '2019 INCN', url: 'https://www.incn.gob.pe/wp-content/uploads/2020/08/2019-Gu%C3%ADa-t%C3%A9cnica-consulta-prolongada-en-neurologia-de-la-conducta-y-enfermedades-neuroinmunol%C3%B3gicas.pdf' },
      { nombre: 'World', año: '2018', url: 'https://www.nice.org.uk/guidance/ng97' }
    ]
  },
  { 
    diagnostico: 'Cefalea Tensional', 
    cie10: 'G442', 
    logos: [
      { nombre: 'EsSalud', año: '2022 🎥', url: 'https://repositorio.essalud.gob.pe/handle/20.500.12959/3128' },
      { nombre: 'MINSA', año: '2021 HNHU', url: 'https://cdn.www.gob.pe/uploads/document/file/2033972/RD-197-07-2021.pdf.pdf' },
      { nombre: 'World', año: '2010', url: 'https://pubmed.ncbi.nlm.nih.gov/20482606/' }
    ]
  },
  
  { 
    diagnostico: 'Dermatitis atopica', 
    cie10: 'L209', 
    logos: [
      { nombre: 'EsSalud', año: '2022 🎥', url: 'https://repositorio.essalud.gob.pe/handle/20.500.12959/3218' },
      { nombre: 'MINSA', año: '2016 HNAL p43', url: 'https://cdn.www.gob.pe/uploads/document/file/2211193/R.D.%20N%C2%BA%20081-2019-HNAL/D.pdf' },
      { nombre: 'World', año: '2023', url: 'https://www.annallergy.org/article/S1081-1206(23)01455-2/fulltext' }
    ]
  },
  { 
    diagnostico: 'Dermatitis de contacto', 
    cie10: 'L239', 
    logos: [
      { nombre: 'EsSalud', año: '2021 🎥', url: 'https://www.youtube.com/watch?v=GTK_iK0cDBo' },
      { nombre: 'MINSA', año: '2016 HNAL p55', url: 'https://cdn.www.gob.pe/uploads/document/file/2211193/R.D.%20N%C2%BA%20081-2019-HNAL/D.pdf' },
      { nombre: 'World', año: '2023', url: 'https://link.springer.com/article/10.1007/s40629-023-00246-9' }
    ]
  },
  { 
    diagnostico: 'Dermatitis del panal', 
    cie10: 'L22X', 
    logos: [
      { nombre: 'EsSalud', año: '2021 🎥', url: 'https://www.youtube.com/watch?v=NRDwIl7tADQ' },
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' }
    ]
  },
  
  { 
    diagnostico: 'Onicomicosis', 
    cie10: 'B351', 
    logos: [
      { nombre: 'EsSalud', año: '2023 🎥', url: 'https://repositorio.essalud.gob.pe/handle/20.500.12959/3583' },
      { nombre: 'MINSA', año: '2016 HNAL p127', url: 'https://cdn.www.gob.pe/uploads/document/file/2211193/R.D.%20N%C2%BA%20081-2019-HNAL/D.pdf' },
      { nombre: 'World', año: '2021', url: 'https://www.aafp.org/pubs/afp/issues/2021/1000/p359.html' }
    ]
  },
  { 
    diagnostico: 'Tiña', 
    cie10: 'B359', 
    logos: [
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: 'MINSA', año: '2016 HNAL p159', url: 'https://cdn.www.gob.pe/uploads/document/file/2211193/R.D.%20N%C2%BA%20081-2019-HNAL/D.pdf' },
      { nombre: 'World', año: '2014', url: 'https://www.aafp.org/pubs/afp/issues/2014/1115/p702.html' }
    ]
  },
  { 
    diagnostico: 'Impetigo', 
    cie10: 'L010', 
    logos: [
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: 'MINSA', año: '2022 p65', url: 'http://bvs.minsa.gob.pe/local/MINSA/4933.pdf' },
      { nombre: 'World', año: '', url: 'https://medicalguidelines.msf.org/es/viewport/CG/spanish/impetigo-23442750.html' }
    ]
  },
  { 
    diagnostico: 'Celulitis', 
    cie10: 'L039', 
    logos: [
      { nombre: 'EsSalud', año: '2022 🎥', url: 'https://repositorio.essalud.gob.pe/handle/20.500.12959/4002' },
      { nombre: 'MINSA', año: '2022 p66', url: 'http://bvs.minsa.gob.pe/local/MINSA/4933.pdf' },
      { nombre: 'World', año: '2014', url: 'https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/' }
    ]
  },
  { 
    diagnostico: 'Urticaria', 
    cie10: 'L509', 
    logos: [
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: 'MINSA', año: '2022 HNAL', url: 'https://cdn.www.gob.pe/uploads/document/file/3081036/R.D.N%C2%BA%20115-HNAL-D-2022.pdf.pdf' },
      { nombre: 'World', año: '2021', url: 'https://onlinelibrary.wiley.com/doi/10.1111/all.15090' }
    ]
  },
  { 
    diagnostico: 'Miasis', 
    cie10: 'B879', 
    logos: [
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: 'World', año: '2012', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3255963/' }
    ]
  },
  { 
    diagnostico: 'Escabiosis', 
    cie10: 'B86X', 
    logos: [
      { nombre: 'EsSalud', año: '2022', url: 'https://repositorio.essalud.gob.pe/handle/20.500.12959/3044#:~:text=La%20escabiosis%20es%20una%20infecci%C3%B3n,y%20zonas%20de%20alta%20densidad.' },
      { nombre: 'MINSA', año: '2016 HNAL p172', url: 'https://cdn.www.gob.pe/uploads/document/file/2211193/R.D.%20N%C2%BA%20081-2019-HNAL/D.pdf' },
      { nombre: 'World', año: '2024', url: 'https://wwwnc.cdc.gov/travel/yellowbook/2024/infections-diseases/scabies#treatment' }
    ]
  },
  
  { 
    diagnostico: 'Rosacea', 
    cie10: 'L719', 
    logos: [
      { nombre: 'EsSalud', año: '2022 🎥', url: 'https://repositorio.essalud.gob.pe/handle/20.500.12959/3090' },
      { nombre: 'MINSA', año: '2023 HNCH', url: 'https://cdn.www.gob.pe/uploads/document/file/4842683/RD%20N%C2%B0%20219-2023-HNCH-DG.pdf' },
      { nombre: 'World', año: '2023', url: 'https://www.dovepress.com/rosacea-practical-guidance-and-challenges-for-clinical-management-peer-reviewed-fulltext-article-CCID' }
    ]
  },
  { 
    diagnostico: 'Acne', 
    cie10: 'L709', 
    logos: [
      { nombre: 'EsSalud', año: '2022 🎥', url: 'https://repositorio.essalud.gob.pe/handle/20.500.12959/3238' },
      { nombre: 'MINSA', año: '2016 HNAL p11', url: 'https://cdn.www.gob.pe/uploads/document/file/2211193/R.D.%20N%C2%BA%20081-2019-HNAL/D.pdf' },
      { nombre: 'World', año: '2024', url: 'https://pubmed.ncbi.nlm.nih.gov/38300170/' }
    ]
  },
  { 
    diagnostico: 'Herpes Labial', 
    cie10: 'B001', 
    logos: [
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: 'World', año: '', url: 'https://medicalguidelines.msf.org/es/viewport/CG/spanish/herpes-bucal-23442339.html' }
    ]
  },
  { 
    diagnostico: 'Herpes Zoster', 
    cie10: 'B029', 
    logos: [
      { nombre: 'EsSalud', año: '2023  🎥', url: 'https://repositorio.essalud.gob.pe/handle/20.500.12959/3454#:~:text=Abstract,piel%20y%20los%20nervios%20perif%C3%A9ricos.' },
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: 'World', año: '2017', url: 'https://www.aafp.org/pubs/afp/issues/2017/1115/p656.html' }
    ]
  },
  { 
    diagnostico: 'Gastritis', 
    cie10: 'K297', 
    logos: [
      { nombre: 'EsSalud', año: '2020 IETSI', url: 'https://ietsi.essalud.gob.pe/wp-content/uploads/2021/11/GPC-HP_Version-Corta.pdf' },
      { nombre: 'MINSA', año: '2022 HNAL', url: 'https://cdn.www.gob.pe/uploads/document/file/2784642/R.D.%20N%C2%BA%20006-2022-DG-HNAL.pdf.pdf' },
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' }
    ]
  },
  { 
    diagnostico: 'Parasitosis intestinal', 
    cie10: 'B829', 
    logos: [
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: 'World', año: 'Section 5', url: 'https://wwwnc.cdc.gov/travel/yellowbook/2024/table-of-contents' }
    ]
  },
  { 
    diagnostico: 'Colon irritable', 
    cie10: 'K589', 
    logos: [
      { nombre: 'EsSalud', año: '2023 🎥', url: 'https://repositorio.essalud.gob.pe/handle/20.500.12959/3460' },
      { nombre: 'MINSA', año: '2023 🎥', url: 'https://www.youtube.com/watch?v=utJrUbZUMxI' },
      { nombre: 'World', año: '2021', url: 'https://journals.lww.com/ajg/fulltext/2021/01000/acg_clinical_guideline__management_of_irritable.11.aspx' }
    ]
  },
 
  { 
    diagnostico: 'ERGE', 
    cie10: 'K219', 
    logos: [
      { nombre: 'EsSalud', año: '2022 🎥', url: 'https://repositorio.essalud.gob.pe/handle/20.500.12959/2921' },
      { nombre: 'MINSA', año: '2021 HNAL', url: 'https://cdn.www.gob.pe/uploads/document/file/2820725/R.D.%20N%C2%BA%20074-2021%20SERV%20GASTRO-GPC%20DXyTTO%20ENF%20REFLUJO%20GASTROESOFAGICO.pdf.pdf' },
      { nombre: 'World', año: '2022', url: 'https://pubmed.ncbi.nlm.nih.gov/34807007/' }
    ]
  },
  { 
    diagnostico: 'Constipacion', 
    cie10: 'K590', 
    logos: [
      { nombre: 'EsSalud', año: '2022 🎥', url: 'https://repositorio.essalud.gob.pe/handle/20.500.12959/4091' },
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' }
    ]
  },
  { 
    diagnostico: 'Hepatitis alcoholica', 
    cie10: 'K701', 
    logos: [
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: 'MINSA', año: '2012', url: 'http://bvs.minsa.gob.pe/local/MINSA/2986.pdf' },
      { nombre: 'World', año: '2019', url: 'https://journals.lww.com/hep/fulltext/2020/01000/diagnosis_and_treatment_of_alcohol_associated.25.aspx' }
    ]
  },
  { 
    diagnostico: 'Higado Graso', 
    cie10: 'K700', 
    logos: [
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: 'World', año: '2020', url: 'https://pubmed.ncbi.nlm.nih.gov/34533266/' }
    ]
  },
  { 
    diagnostico: 'Hiperplasia de prostata', 
    cie10: 'N40X', 
    logos: [
      { nombre: 'EsSalud', año: '2022 🎥', url: 'https://repositorio.essalud.gob.pe/handle/20.500.12959/3386' },
      { nombre: 'MINSA', año: '2023 HSB', url: 'https://hnseb.gob.pe/repositorio-principal/resoluciones-directorales/2023/RD2023-203.pdf' },
      { nombre: 'World', año: '2023', url: 'https://www.auajournals.org/doi/10.1097/JU.0000000000003698' }
    ]
  },
  { 
    diagnostico: 'Prostatis aguda', 
    cie10: 'N410', 
    logos: [
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: 'World', año: '2018', url: 'https://medicalguidelines.msf.org/en/viewport/CG/english/acute-prostatitis-18482342.html' }
    ]
  },
  { 
    diagnostico: 'Dismenorrea', 
    cie10: 'N946', 
    logos: [
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: 'MINSA', año: '2020', url: 'https://www.google.com/search?q=GU%C3%8DA+DE+PR%C3%81CTICA+CLINICA+PARA+EL+DIAGN%C3%93STICO+Y+%0D%0ATRATAMIENTO+DE+LOS+TRASTORNOS+DEL+CICLO+%0D%0AMENSTRUAL+EN+ADOLESCENTES+&sca_esv=34e05643fe6f2863&sxsrf=ADLYWILMbDQnYIhAbA76Warl6GRG8oba9g%3A1733447292675&ei=fE5SZ6PxKMKGwbkP1tDtiQs&ved=0ahUKEwijn_ew-pGKAxVCQzABHVZoO7EQ4dUDCBA&uact=5&oq=GU%C3%8DA+DE+PR%C3%81CTICA+CLINICA+PARA+EL+DIAGN%C3%93STICO+Y+%0D%0ATRATAMIENTO+DE+LOS+TRASTORNOS+DEL+CICLO+%0D%0AMENSTRUAL+EN+ADOLESCENTES+&gs_lp=Egxnd3Mtd2l6LXNlcnAidkdVw41BIERFIFBSw4FDVElDQSBDTElOSUNBIFBBUkEgRUwgRElBR07Dk1NUSUNPIFkgClRSQVRBTUlFTlRPIERFIExPUyBUUkFTVE9STk9TIERFTCBDSUNMTyAKTUVOU1RSVUFMIEVOIEFET0xFU0NFTlRFUyAyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyEBAAGAMYtAIY6gIYjwHYAQEyEBAAGAMYtAIY6gIYjwHYAQEyEBAuGAMYtAIY6gIYjwHYAQEyEBAAGAMYtAIY6gIYjwHYAQEyEBAAGAMYtAIY6gIYjwHYAQEyEBAAGAMYtAIY6gIYjwHYAQEyEBAuGAMYtAIY6gIYjwHYAQEyEBAAGAMYtAIY6gIYjwHYAQEyEBAAGAMYtAIY6gIYjwHYAQEyEBAAGAMYtAIY6gIYjwHYAQFI9w5QpAhYpAhwAngBkAEAmAEAoAEAqgEAuAEDyAEA-AEB-AECmAICoAIMqAIUmAMH8QXUBgRleWnCe7oGBggBEAEYCpIHATKgBwA&sclient=gws-wiz-serp' },
      { nombre: 'World', año: '2021', url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2018/12/dysmenorrhea-and-endometriosis-in-the-adolescent' }
    ]
  },
  { 
    diagnostico: 'Climaterio', 
    cie10: 'N951', 
    logos: [
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: 'MINSA', año: '2022 HSB', url: 'http://sieval.sanbartolome.gob.pe/transparencia/Publicacion2022/Direccion/RD%20129%20DG%202022.pdf' },
      { nombre: 'World', año: '2019', url: 'https://thebms.org.uk/publications/nice-guideline/' }
    ]
  },
  { 
    diagnostico: 'Prolapso genital femenino', 
    cie10: 'N819', 
    logos: [
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: 'MINSA', año: '2019 HNCH', url: 'https://www.hospitalcayetano.gob.pe/PortalWeb/wp-content/uploads/resoluciones/2019/rd/RD_430-2019-HCH-DG.pdf' },
      { nombre: 'World', año: '2019', url: 'https://journals.lww.com/greenjournal/abstract/2019/11000/pelvic_organ_prolapse__acog_practice_bulletin,.44.aspx#:~:text=Mild%20descent%20of%20the%20pelvic,urinary%20tract%20or%20bowel%20function.' }
    ]
  },
  { 
    diagnostico: 'Incontinencia urinaria', 
    cie10: 'R32X', 
    logos: [
      { nombre: 'EsSalud', año: '2022 🎥', url: 'https://repositorio.essalud.gob.pe/handle/20.500.12959/3339' },
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: 'World', año: '2022', url: 'https://www.thieme-connect.de/products/ejournals/html/10.1055/a-1967-1888?articleLanguage=en' }
    ]
  },
  { 
    diagnostico: 'Rinitis alergica', 
    cie10: 'J304', 
    logos: [
      { nombre: 'EsSalud', año: '2022 🎥', url: 'https://repositorio.essalud.gob.pe/handle/20.500.12959/3080' },
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: 'World', año: '2020', url: 'https://www.jacionline.org/article/S0091-6749(20)31023-X/fulltext' }
    ]
  },
  { 
    diagnostico: 'EPOC', 
    cie10: 'J449', 
    logos: [
      { nombre: 'EsSalud', año: '2023 🎥', url: 'https://repositorio.essalud.gob.pe/handle/20.500.12959/3459' },
      { nombre: 'MINSA', año: '2016', url: 'https://docs.bvsalud.org/biblioref/2019/07/1006744/guia_peruana_epoc.pdf' },
      { nombre: 'World', año: '2024', url: 'https://goldcopd.org/2024-gold-report/' }
    ]
  },
  { 
    diagnostico: 'Asma', 
    cie10: 'J459', 
    logos: [
      { nombre: 'EsSalud', año: '2023 IETSI', url: 'https://ietsi.essalud.gob.pe/wp-content/uploads/2024/04/GPC-Asma-en-ninos-y-adolescentes_Version-corta.pdf' },
      { nombre: 'MINSA', año: '2023', url: 'https://www.google.com/search?q=GU%C3%8DA+DE+PR%C3%81CTICA+CL%C3%8DNICA+PARA+EL+DIAGN%C3%93STICO+Y+TRATAMIENTO+DE+ASMA+insn&oq=GU%C3%8DA+DE+PR%C3%81CTICA+CL%C3%8DNICA+PARA+EL+DIAGN%C3%93STICO+Y+TRATAMIENTO+DE+ASMA+insn&gs_lcrp=EgRlZGdlKgYIABBFGDkyBggAEEUYOdIBCDI4NjBqMGoxqAIAsAIB&sourceid=chrome&ie=UTF-8' },
      { nombre: 'World', año: '2024', url: 'https://ginasthma.org/' }
    ]
  },
  { 
    diagnostico: 'Tuberculosis TBC', 
    cie10: '____', 
    logos: [
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: 'MINSA', año: '2023', url: 'http://www.tuberculosis.minsa.gob.pe/portaldpctb/recursos/20230703103146.pdf' },
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' }
    ]
  },
  { 
    diagnostico: 'Catarata', 
    cie10: 'H259', 
    logos: [
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: 'MINSA', año: '2009', url: 'https://bvs.minsa.gob.pe/local/MINSA/1750.pdf' },
      { nombre: 'World', año: '2010', url: 'https://www.aoa.org/AOA/Documents/Practice%20Management/Clinical%20Guidelines/Consensus-based%20guidelines/Care%20of%20the%20Adult%20Patient%20with%20Catract.pdf' }
    ]
  },

  { 
    diagnostico: 'Conjuntivitis', 
    cie10: 'H109', 
    logos: [
      { nombre: 'EsSalud', año: '2016', url: 'https://www.essalud.gob.pe/downloads/guias_emergencia_epidemiologica/guia_enfermedades_externas_del_parpado_y_laconjuntiva.pdf' },
      { nombre: 'MINSA', año: '2021 HNAL p3', url: 'https://cdn.www.gob.pe/uploads/document/file/1903140/R.D.%20N%C2%BA%20101-2021-DG-HNAL.pdf.pdf' },
      { nombre: 'World', año: '2023', url: 'https://www.aao.org/education/preferred-practice-pattern/conjunctivitis-ppp-2023' }
    ]
  },
  { 
    diagnostico: 'Chalazion', 
    cie10: 'H001', 
    logos: [
      { nombre: 'EsSalud', año: '2016', url: 'https://www.essalud.gob.pe/downloads/guias_emergencia_epidemiologica/guia_enfermedades_externas_del_parpado_y_laconjuntiva.pdf' },
      { nombre: 'MINSA', año: '2016', url: 'https://bvs.minsa.gob.pe/local/MINSA/3687.pdf' },
      { nombre: 'World', año: '2015', url: 'https://www.aao.org/eyenet/article/chalazion-management-evidence-questions' }
    ]
  },
  { 
    diagnostico: 'Glaucoma angulo abierto', 
    cie10: 'H401', 
    logos: [
      { nombre: 'EsSalud', año: '2021 IETSI', url: 'https://ietsi.essalud.gob.pe/wp-content/uploads/2021/12/GPC-Glaucoma-AA_V-Ext-Anexos.pdf' },
      { nombre: 'MINSA', año: '2016', url: 'https://www.ino.gob.pe/wp-content/uploads/2021/08/RD-N-140-2016-INO-D.pdf' },
      { nombre: 'World', año: '2020', url: 'https://www.aao.org/education/preferred-practice-pattern/primary-open-angle-glaucoma-ppp' }
    ]
  },
  { 
    diagnostico: 'Glaucoma angulo cerrado', 
    cie10: 'H402', 
    logos: [
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: 'MINSA', año: '2021', url: 'https://www.ino.gob.pe/wp-content/uploads/2021/08/glaucoma.pdf' },
      { nombre: 'World', año: '2013', url: 'https://www.aao.org/education/munnerlyn-laser-surgery-center/angleclosure-glaucoma-19' }
    ]
  },
  { 
    diagnostico: 'ITS/ETS -> lo recomendable buscar la app CDC para ITS', 
    cie10: '____', 
    logos: [
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' }
    ]
  },
  { 
    diagnostico: 'Anemia ferropenica', 
    cie10: 'D509', 
    logos: [
      { nombre: 'EsSalud', año: '2015', url: 'https://www.essalud.gob.pe/ietsi/pdfs/guias/GPC_anemia_por_deficiencia_de_hierro.pdf' },
      { nombre: 'MINSA', año: '2024', url: 'https://www.gob.pe/institucion/minsa/normas-legales/5440166-251-2024-minsa' },
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' }
    ]
  },
  { 
    diagnostico: 'Mal de altura', 
    cie10: 'T702', 
    logos: [
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: '', año: '', url: 'https://www.google.com.pe/?hl=es' },
      { nombre: 'World', año: '2018', url: 'https://www.cochranelibrary.com/es/cdsr/doi/10.1002/14651858.CD009567.pub2/full/es' }
    ]
  },


  

 
  // Más enfermedades
];

const Enfermedades = () => {
  const [selectedLogo, setSelectedLogo] = useState(null);
  const [selectedUrl, setSelectedUrl] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');  // Estado para el buscador

  const handleIconPress = (indexEnfermedad, indexLogo) => {
    const selected = selectedLogo === `${indexEnfermedad}-${indexLogo}` ? null : `${indexEnfermedad}-${indexLogo}`;
    setSelectedLogo(selected);
  };

  const handleLinkPress = (url) => {
    setSelectedUrl(url);
    setModalVisible(true);
  };

  const openLink = () => {
    if (selectedUrl) {
      Linking.openURL(selectedUrl);
      setModalVisible(false);
    }
  };

  const handleSearchChange = (text) => {
    setSearchQuery(text);
  };

  // Filtrar enfermedades según el texto ingresado
  const filteredEnfermedades = enfermedades.filter((item) => 
    item.diagnostico.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.cie10.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>
        Se te muestra a continuacion algunas de las patologias mas frecuentes, muchas de ellas fueron evaluadas y se desarrollaron las guias de practica clinica respectivamente, los botones te permite acceder donde fueron publicadas inicialmente ya sea por dichas entidades como tal, o como es el caso de algunos hospitales que tambien publican sus guias de sus patologias que enfrentan.
        Algunos de estos documentos fueron publicados hace mas de 5 años, se te recomienda buscar informacion mas actualizada en esos casos.
        Todo el contenido y desarrollo les corresponde como tal a dichas entidades, solo se te muestra el enlace donde fueron publicadas, algunos de estos documentos fueron publicados para que cuando hagas click se descarguen de forma automatica, es por ello que aparece una sobreventana que te avisa cual es el enlace, DEBES ver si tu deseas abrir el enlace o si decides cancelar.
      </Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar por diagnóstico o CIE10..."
        value={searchQuery}
        onChangeText={handleSearchChange}  // Actualiza el estado del buscador
      />

      <View style={styles.table}>
        <View style={styles.header}>
          <Text style={styles.headerText}>DIAGNÓSTICOS</Text>
          <Text style={styles.headerText}>CIE10</Text>
          <Text style={styles.headerText}>EsSalud</Text>
          <Text style={styles.headerText}>MINSA</Text>
          <Text style={styles.headerText}>World</Text>
        </View>

        {filteredEnfermedades.map((item, indexEnfermedad) => (
          <View key={indexEnfermedad} style={styles.row}>
            <Text style={styles.cell}>{item.diagnostico}</Text>
            <Text style={styles.cell}>{item.cie10}</Text>

            {item.logos.map((logo, indexLogo) => (
              <View key={indexLogo} style={styles.iconContainer}>
                <TouchableOpacity onPress={() => handleIconPress(indexEnfermedad, indexLogo)}>
                  <Image
                    source={logoImages[logo.nombre.toLowerCase()]}
                    style={styles.icon}
                  />
                </TouchableOpacity>

                {selectedLogo === `${indexEnfermedad}-${indexLogo}` && (
                  <View style={styles.yearContainer}>
                    <Text style={styles.yearText}>Año: {logo.año}</Text>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => handleLinkPress(logo.url)}
                    >
                      <Text style={styles.buttonText}>Ir</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            ))}
          </View>
        ))}
      </View>

      {/* Modal con vista previa */}
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Vista previa del enlace</Text>
            <Text style={styles.previewText}>{selectedUrl}</Text>
            <TouchableOpacity style={styles.browserButton} onPress={openLink}>
              <Text style={styles.browserButtonText}>Abrir enlace</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  searchInput: {
    width: width * 0.9,
    padding: 10,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    fontSize: width * 0.04,
    height: 50,  // Aumenta la altura a 48dp
  },
  table: {
    width: width * 0.9,
    borderWidth: 1,
    borderColor: '#000',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
  },
  headerText: {
    flex: 1,
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: width * 0.03,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
  },
  cell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
    fontSize: width * 0.035,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    width: width * 0.1,
    height: width * 0.1,
    marginHorizontal: 5,
  },
  yearContainer: {
    marginTop: 5,
    alignItems: 'center',
  },
  yearText: {
    fontSize: width * 0.035,
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: width * 0.035,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: width * 0.8,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  browserButton: {
    backgroundColor: 'blue',
    paddingVertical:20,
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  browserButtonText: {
    color: 'white',
    fontSize: 16,
  },
  cancelButton: {
    marginTop: 10,
  },
  cancelButtonText: {
    fontSize: 16,
    color: 'red',
  },
});

export default Enfermedades;
