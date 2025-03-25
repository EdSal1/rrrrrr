import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import * as Print from 'expo-print';

const Auditoria = () => {
  const [scores, setScores] = useState({});
  const [selectedOptions, setSelectedOptions] = useState({});
  const [totalScore, setTotalScore] = useState(0);
  const [grade, setGrade] = useState("");
  const [establecimiento, setEstablecimiento] = useState("");
  const [miembros, setMiembros] = useState("");
  const [numAuditores, setNumAuditores] = useState("");
  const [fechaAuditoria, setFecAuditoria] = useState("");
  const [servicAuditado, setServAuditado] = useState("");
  const [asunto, setAsunto] = useState("");
  const [fecAtencion, setFecAtencion] = useState("");
  const [codHC, setCodHC] = useState("");
  const [codPT, setCodPT] = useState("");
  const [diagAlta, setDiagAlta] = useState("");
  const [cie, setCie] = useState("");

  const criteria = [
    {
      title: "FILIACIÓN",
      subItems: [
        { subTitle: "Número de historia clínica", scoreOptions: { Completo: 0.25, Incompleto: 0, "En exceso": 0, "No existe": 0, "No aplica": 0.25 } },
        { subTitle: "Nombre y Apellidos del paciente", scoreOptions: { Completo: 0.25, Incompleto: 0, "En exceso": 0, "No existe": 0, "No aplica": 0.25 } },
        { subTitle: "Tipo y numero de Seguro", scoreOptions: { Completo: 0.25, Incompleto: 0, "En exceso": 0, "No existe": 0, "No aplica": 0.25 } },
        { subTitle: "Lugar y fecha de nacimiento", scoreOptions: { Completo: 0.25, Incompleto: 0, "En exceso": 0, "No existe": 0, "No aplica": 0.25 } },
        { subTitle: "Edad", scoreOptions: { Completo: 0.25, Incompleto: 0, "En exceso": 0, "No existe": 0, "No aplica": 0.25 } },
        { subTitle: "Sexo", scoreOptions: { Completo: 0.25, Incompleto: 0, "En exceso": 0, "No existe": 0, "No aplica": 0.25 } },
        { subTitle: "Domicilio Actual", scoreOptions: { Completo: 0.25, Incompleto: 0, "En exceso": 0, "No existe": 0, "No aplica": 0.25 } },
        { subTitle: "Lugar de procedencia", scoreOptions: { Completo: 0.25, Incompleto: 0, "En exceso": 0, "No existe": 0, "No aplica": 0.25 } },
        { subTitle: "Documento de identificacion", scoreOptions: { Completo: 0.25, Incompleto: 0, "En exceso": 0, "No existe": 0, "No aplica": 0.25 } },
        { subTitle: "Estado civil", scoreOptions: { Completo: 0.25, Incompleto: 0, "En exceso": 0, "No existe": 0, "No aplica": 0.25 } },
        { subTitle: "Grado de instruccion", scoreOptions: { Completo: 0.25, Incompleto: 0, "En exceso": 0, "No existe": 0, "No aplica": 0.25 } },
        { subTitle: "Ocupacion", scoreOptions: { Completo: 0.25, Incompleto: 0, "En exceso": 0, "No existe": 0, "No aplica": 0.25 } },
        { subTitle: "Religion", scoreOptions: { Completo: 0.25, Incompleto: 0, "En exceso": 0, "No existe": 0, "No aplica": 0.25 } },
        { subTitle: "Telefono", scoreOptions: { Completo: 0.25, Incompleto: 0, "En exceso": 0, "No existe": 0, "No aplica": 0.25 } },
        { subTitle: "Acompañante", scoreOptions: { Completo: 0.25, Incompleto: 0, "En exceso": 0, "No existe": 0, "No aplica": 0.25 } },
        { subTitle: "Domicilio y/o telefono de la persona responsable", scoreOptions: { Completo: 0.25, Incompleto: 0, "En exceso": 0, "No existe": 0, "No aplica": 0.25 } },
      ],
    },
    { title: "ANAMNESIS", subItems: [
        { subTitle: "Fecha y hora de atención", scoreOptions: { Completo: 1, Incompleto: 0.5, "En exceso": 0, "No existe": 0, "No aplica": 1 }},
        { subTitle: "Motivo de la consulta", scoreOptions: { Completo: 1, Incompleto: 0, "En exceso": 0, "No existe": 0, "No aplica": 1 } },
        { subTitle: "Tiempo de enfermedad", scoreOptions: { Completo: 1, Incompleto: 0, "En exceso": 0, "No existe": 0, "No aplica": 1 } },
        { subTitle: "Relato cronologico", scoreOptions: { Completo: 3, Incompleto: 1.5, "En exceso": 0, "No existe": 0, "No aplica": 3 } },
        { subTitle: "Funciones biologicas", scoreOptions: { Completo: 1, Incompleto: 0.5, "En exceso": 0, "No existe": 0, "No aplica": 1 } },
        { subTitle: "Antecedente", scoreOptions: { Completo: 2, Incompleto: 1, "En exceso": 0, "No existe": 0, "No aplica": 2 } },

    ], 
    },


    { title: "EXAMEN CLÍNICO", subItems: [
        { subTitle: "Funciones vitales T, FR, FC, PA", scoreOptions: { Completo: 2, Incompleto: 0.5, "En exceso": 0, "No existe": 0, "No aplica": 2 } },
        { subTitle: "Peso, Talla", scoreOptions: { Completo: 1, Incompleto: 0.5, "En exceso": 0, "No existe": 0, "No aplica": 1 } },
        { subTitle: "Estado general, estado de hidratacion, estado de nutricion, estado de conciencia, piel y anexos", scoreOptions: { Completo: 2, Incompleto: 1, "En exceso": 0, "No existe": 0, "No aplica": 2 } },
        { subTitle: "Examen clinico regional", scoreOptions: { Completo: 4, Incompleto: 2, "En exceso": 0, "No existe": 0, "No aplica": 4 } },

    ], 
    },

    {
        title: "DIAGNOSTICOS",
        subItems: [
          { subTitle: "Presuntivo Coherente", scoreOptions: { Completo: 8, Incompleto: 4, "En exceso": 0, "No existe": 0, "No aplica": 8 } },
          { subTitle: "Definitivo Coherente", scoreOptions: { Completo: 8, Incompleto: 4, "En exceso": 0, "No existe": 0, "No aplica": 8 } },
          { subTitle: "Uso del CIE-10", scoreOptions: { Completo: 4, Incompleto: 0, "En exceso": 0, "No existe": 0, "No aplica": 4 } },
        ],
      },
   
    
    {
      title: "PLAN DE TRABAJO",
      subItems: [
        { subTitle: "Exámenes de Patología Clínica pertinentes", scoreOptions: { Completo: 5, Incompleto: 1, "En exceso": 2, "No existe": 0, "No aplica": 5 } },
        { subTitle: "Exámenes de diagnóstico por imágenes", scoreOptions: { Completo: 5, Incompleto: 1, "En exceso": 2, "No existe": 0, "No aplica": 5 } },
        { subTitle: "Interconsultas (a otros servicios dentro del establecimiento de salud pertinetes)", scoreOptions: { Completo: 4, Incompleto: 1, "En exceso": 2, "No existe": 0, "No aplica": 4 } },
        { subTitle: "Referencias a otros establecimientos de salud", scoreOptions: { Completo: 4, Incompleto: 0, "En exceso": 0, "No existe": 0, "No aplica": 4 } },
        { subTitle: "Procedimientos diagnosticos y/o terapeuticos pertinentes", scoreOptions: { Completo: 4, Incompleto: 1, "En exceso": 2, "No existe": 0, "No aplica": 4 } },
        { subTitle: "Fecha de proxima cita", scoreOptions: { Completo: 2, Incompleto: 0, "En exceso": 0, "No existe": 0, "No aplica": 2 } },
      ],
    },

    {
        title: "TRATAMIENTO",
        subItems: [
          { subTitle: "Regimen higienico-dietetico y medidas generales concordantes y coherentes", scoreOptions: { Completo: 4, Incompleto: 2, "En exceso": 0, "No existe": 0, "No aplica": 4 } },
          { subTitle: "Nombre de medicamentos coherentes y concordante con denominacion comun internacional (DCI)", scoreOptions: { Completo: 4, Incompleto: 2, "En exceso": 0, "No existe": 0, "No aplica": 4} },
          { subTitle: "Consigna presentacion", scoreOptions: { Completo: 2, Incompleto: 0, "En exceso": 0, "No existe": 0, "No aplica": 2 } },
          { subTitle: "Dosis de medicamento", scoreOptions: { Completo: 2, Incompleto: 0, "En exceso": 0, "No existe": 0, "No aplica": 2 } },
          { subTitle: "Via de administracion", scoreOptions: { Completo: 2, Incompleto: 0, "En exceso": 0, "No existe": 0, "No aplica": 2 } },
          { subTitle: "Frecuencia del medicamento", scoreOptions: { Completo: 2, Incompleto: 0, "En exceso": 0, "No existe": 0, "No aplica": 2 } },
          { subTitle: "Duracion del tratamiento", scoreOptions: { Completo: 1, Incompleto: 0.5, "En exceso": 0, "No existe": 0, "No aplica": 1 } },
        ],
      },

      {
        title: "ATRIBUTOS DE LA HISTORIA CLINICA",
        subItems: [
          { subTitle: "Se cuenta con Formatos de atencion Integral por etapas de vida (Primer Nivel de Atencion)", scoreOptions: { Completo: 2, Incompleto: 1, "En exceso": 0, "No existe": 0, "No aplica": 2 } },
          { subTitle: "Pulcritud", scoreOptions: { Completo: 1, Incompleto: 0, "En exceso": 0, "No existe": 0, "No aplica": 1 } },
          { subTitle: "Letra legible", scoreOptions: { Completo: 1, Incompleto: 0, "En exceso": 0, "No existe": 0, "No aplica": 1 } },
          { subTitle: "No uso de abreviaturas", scoreOptions: { Completo: 1, Incompleto: 0, "En exceso": 0, "No existe": 0, "No aplica": 1 } },
          { subTitle: "Sello y firma del medico tratante", scoreOptions: { Completo: 2, Incompleto: 1, "En exceso": 0, "No existe": 0, "No aplica": 2 } },
          { subTitle: "SEGUIMIENTO DE LA EVOLUCION", scoreOptions: { Completo: 10, Incompleto: 5, "En exceso": 0, "No existe": 0, "No aplica": 10 } },
        ],
      },



  ];

  const handleScore = (criterion, subItemIndex, option) => {
    const subItemKey = `${criterion.title}_${subItemIndex}`;
    const updatedSelectedOptions = { ...selectedOptions, [subItemKey]: option };
    const updatedScores = { ...scores, [subItemKey]: criterion.subItems[subItemIndex].scoreOptions[option] };

    setSelectedOptions(updatedSelectedOptions);
    setScores(updatedScores);

    const updatedTotal = Object.values(updatedScores).reduce((a, b) => a + b, 0);
    setTotalScore(updatedTotal);

    if (updatedTotal >= 90) setGrade("Satisfactorio");
    else if (updatedTotal >= 75) setGrade("Por mejorar");
    else setGrade("Deficiente");
  };

  const generatePDF = async () => {
    try {
      const tableRows = criteria
        .map(
          (criterion) =>
            `<tr>
              <td style="border: 1px solid #000; padding: 8px;" colspan="7"><strong>${criterion.title}</strong></td>
            </tr>` +
            criterion.subItems
              .map((subItem, subIndex) => {
                const selectedOption = selectedOptions[`${criterion.title}_${subIndex}`];
                return `
                  <tr>
                    <td style="border: 1px solid #000; padding: 8px;">${subItem.subTitle}</td>
                    ${Object.keys(subItem.scoreOptions)
                      .map(
                        (option) => `
                        <td style="border: 1px solid #000; padding: 8px; text-align: center;">${
                          selectedOption === option ? "X" : ""
                        }</td>
                      `
                      )
                      .join("")}
                    <td style="border: 1px solid #000; padding: 8px; text-align: center;">${
                      scores[`${criterion.title}_${subIndex}`] ?? "0"
                    }</td>
                  </tr>
                `;
              })
              .join("")
        )
        .join("");
  
      const htmlContent = `
        <html>
          <head>
            <style>
              body {
                margin: 1cm; /* Márgenes de 1 cm en todos los lados */
                font-family: Arial, sans-serif;
                font-size: 10px; /* Tamaño de fuente reducido */
              }
              table {
                width: 100%;
                border-collapse: collapse;
              }
              th, td {
                text-align: left;
                padding: 5px; /* Ajuste de padding para reducir espacio */
                font-size: 10px; /* Reducir tamaño de fuente en la tabla */
              }
              th {
                background-color: #f2f2f2;
              }
              .green {
                color: green;
              }
              .yellow {
                color: amber;
              }
              .red {
                color: red;
              }
            </style>
          </head>
          <body>
            <h1 style="text-align: center;">Informe de Auditoría</h1>
            <p><strong>Puntaje total:</strong> ${totalScore}</p>
            <p><strong>Calificación:</strong> <span class="${
              grade === "Satisfactorio" ? "green" : grade === "Por mejorar" ? "yellow" : "red"
            }">${grade}</span></p>
            <p><strong>Nombre de establecimiento:</strong> ${establecimiento}</p>
            <p><strong>Miembros del comite:</strong> ${miembros}</p>
            <p><strong>Número de Auditores:</strong> ${numAuditores}</p>
            <p><strong>Fecha de Auditoria:</strong> ${fechaAuditoria}</p>
            <p><strong>Servicio Auditado:</strong> ${servicAuditado}</p>
            <p><strong>Asunto:</strong> ${asunto}</p>
            <p><strong>Fecha atencion brindada:</strong> ${fecAtencion}</p>
            <p><strong>Codificacion de la Historia Clinica:</strong> ${codHC}</p>
            <p><strong>Codificacion del Personal Tratante:</strong> ${codPT}</p>
            <p><strong>Diagnostico del alta:</strong> ${diagAlta}</p>
            <p><strong>CIE 10:</strong> ${cie}</p>
            <h2>Detalles de Evaluación</h2>
            <table>
              <thead>
                <tr>
                  <th style="border: 1px solid #000;">Subítem</th>
                  <th style="border: 1px solid #000;">Completo</th>
                  <th style="border: 1px solid #000;">Incompleto</th>
                  <th style="border: 1px solid #000;">En exceso</th>
                  <th style="border: 1px solid #000;">No existe</th>
                  <th style="border: 1px solid #000;">No aplica</th>
                  <th style="border: 1px solid #000;">Puntaje</th>
                </tr>
              </thead>
              <tbody>
                ${tableRows}
              </tbody>
            </table>
          </body>
        </html>
      `;
  
      const { uri } = await Print.printToFileAsync({ html: htmlContent });
      alert(`PDF generado en: ${uri}`);
      await Print.printAsync({ uri });
    } catch (error) {
      console.error("Error al generar el PDF:", error);
    }
  };
  
  

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Datos Generales</Text>
      <TextInput style={styles.input} placeholder="Nombre de establecimiento" value={establecimiento} onChangeText={setEstablecimiento} />
      <TextInput style={styles.input} placeholder="Miembros del comite" value={miembros} onChangeText={setMiembros} />
      <TextInput style={styles.input} placeholder="Número de Auditores" value={numAuditores} onChangeText={setNumAuditores} />
      <TextInput style={styles.input} placeholder="Fecha de auditoria" value={fechaAuditoria} onChangeText={setFecAuditoria} />
      <TextInput style={styles.input} placeholder="Servicio Auditado" value={servicAuditado} onChangeText={setServAuditado} />
      <TextInput style={styles.input} placeholder="Asunto" value={asunto} onChangeText={setAsunto} />
      <TextInput style={styles.input} placeholder="Fecha Atencion brindada" value={fecAtencion} onChangeText={setFecAtencion} />
      <TextInput style={styles.input} placeholder="Codificacion de la Historia Clinica" value={codHC} onChangeText={setCodHC} />
      <TextInput style={styles.input} placeholder="Codificacion del Personal Tratante" value={codPT} onChangeText={setCodPT} />
      <TextInput style={styles.input} placeholder="Diagnostico del Alta" value={diagAlta} onChangeText={setDiagAlta} />
      <TextInput style={styles.input} placeholder="CIE 10" value={cie} onChangeText={setCie} />

      {criteria.map((criterion, index) => (
        <View key={index} style={styles.section}>
          <Text style={styles.criterionTitle}>{criterion.title}</Text>
          {criterion.subItems.map((subItem, subIndex) => (
            <View key={subIndex} style={styles.subItem}>
              <Text style={styles.subItemText}>{subItem.subTitle}</Text>
              <View style={styles.buttonGroup}>
                {Object.keys(subItem.scoreOptions).map((option, idx) => (
                  <TouchableOpacity
                    key={idx}
                    style={[
                      styles.optionButton,
                      selectedOptions[`${criterion.title}_${subIndex}`] === option ? styles.selectedButton : styles.deselectedButton,
                    ]}
                    onPress={() => handleScore(criterion, subIndex, option)}
                  >
                    <Text style={styles.buttonText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ))}
        </View>
      ))}

      <Text style={styles.totalScore}>Puntaje total: {totalScore}</Text>
      <Text style={[styles.grade, grade === "Satisfactorio" && styles.green, grade === "Por mejorar" && styles.yellow, grade === "Deficiente" && styles.red]}>
        {grade}
      </Text>

      <View style={styles.generateButtonContainer}>
        <Button title="Generar Informe PDF" onPress={generatePDF} />
        <Text style={styles.footerText}>Fuente: Minsa.Norma técnica de salud de auditoría de la calidad de la atención en salud (2016). Anexo Nº5</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10, backgroundColor: "#fff" },
    title: { fontSize: 24, fontWeight: "bold", marginBottom: 1 },
    section: { marginBottom: 0.5 },
    subItem: { marginBottom: 0.1, paddingLeft: 0.1, flexDirection: 'row', alignItems: 'center' },
    subItemText: { 
      flexWrap: 'wrap',   
      width: '25%',       
      marginBottom: 10   
    },
    criterionTitle: { fontSize: 18, fontWeight: "bold" },
    buttonGroup: { 
      flexDirection: "row", 
      flexWrap: "wrap", 
      marginTop: 1, 
      justifyContent: "space-between", // Distribute buttons evenly
    },
    optionButton: {
      paddingVertical: 2,   // Adjust vertical padding for better spacing
      paddingHorizontal: 2, // Adjust horizontal padding for button size
      margin: 0.01,         // Reduce margin to make buttons closer
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      backgroundColor: "#ccc",
      flex: 1,              // This will make sure the buttons take equal width
      maxWidth: '15%',      // This is the key adjustment to limit the width of each button
    },
    deselectedButton: { backgroundColor: "#ccc" },
    selectedButton: { backgroundColor: "#007BFF", borderColor: "#007BFF" },
    buttonText: { 
      color: "#fff", 
      fontSize: 10,  // Reduced font size to make text smaller
    },
    totalScore: { fontSize: 20, fontWeight: "bold", marginVertical: 10, marginTop: 5 },
    grade: { fontSize: 20, fontWeight: "bold", textAlign: "center", padding: 10, marginTop: 10 },
    green: { backgroundColor: "#28a745", color: "#fff" },
    yellow: { backgroundColor: "#ffc107", color: "#fff" },
    red: { backgroundColor: "#dc3545", color: "#fff" },
    input: { height: 40, borderColor: '#ccc', borderWidth: 1, marginBottom: 10, paddingLeft: 10 },
    generateButtonContainer: {
      marginTop: 20,
      paddingBottom: 30,
    }
  });

export default Auditoria;
