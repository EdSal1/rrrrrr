import { StyleSheet, Text, View, TouchableOpacity, TextInput, Linking, ScrollView, FlatList } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Ionicons } from '@expo/vector-icons';

const EmgRurales = () => {
  const [searchText, setSearchText] = useState('');
  
  const handleVolunteerPress = () => {
    const email = 'intervencionruralemergencias@gmail.com';
    const subject = 'SER VOLUNTARIO';
    const body = 'Mi nombre es [...] y deseo ser Voluntario en Proyecto ISAR';
    const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    Linking.openURL(mailtoURL);
  };

  const handleTeleMPress = () => {
    const email = 'intervencionruralemergencias@gmail.com';
    const subject = 'SOLICITAR TELEMENTORIA';
    const body = 'Mi nombre es [...]  y adjunto PDF Completo';
    const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    Linking.openURL(mailtoURL);
  };

  const handleOpenLink = (url) => {
    Linking.openURL(url);
  };

  const emergencies = [
    {
      id: '1',
      title: 'Crisis Hipertensiva',
      buttons: [
        { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkS1EeBG/', color: '#000000' },
        { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkS1v74p/', color: '#000000' },
        { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSJLeug/', color: '#000000' },
        { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkS1EUK4/', color: '#000000' },
        { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSJFN51/', color: '#000000' },     
        
        ],
    },

    {
      id: '2',
      title: 'Crisis Hipertensiva 2',
      buttons: [
        { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSJYKFY/', color: '#000000' },
        { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSJRVJW/', color: '#000000' },
        { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkS1oLvK/', color: '#000000' },
        { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkS1T5qx/', color: '#000000' },
        { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkS1E72X/', color: '#000000' },  
      ],
    },
    {
      id: '3',
      title: 'Crisis Hipertensiva 3',
      buttons: [
        { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSrV3kJ/', color: '#000000' },
        { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSrpEYT/', color: '#000000' },
        { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSAxf6q/', color: '#000000' },
        { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSA4puR/', color: '#000000' },
        
      ],
    },

    {
      id: '4',
      title: 'Calcioantagonistas',
      buttons: [
        { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSrVrqp/', color: '#000000' },
        { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSrgqUV/', color: '#000000' },
        { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSr7njL/', color: '#000000' },
        { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSrXCGX/', color: '#000000' },
        
        
      ],
    },

    {
      id: '5',
      title: 'SICA Sindrome coronario agudo',
      buttons: [
        { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSJU7Ge/', color: '#000000' },
        { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSJpjAW/', color: '#000000' },
        { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkShyNUT/', color: '#000000' },
        { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSha6D1/', color: '#000000' },
        { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkShSQU5/', color: '#000000' },
        { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSh8Vkt/', color: '#000000' },
      ],
    },
    {
        id: '6',
        title: 'Migraña',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSJunrw/', color: '#000000'  },
        ],
      },

      {
        id: '7',
        title: 'Cetoacidosis diabetica CAD',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSJBmNc/', color: '#000000'  },
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSJQkt7/', color: '#000000'  },
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSJ9tHd/', color: '#000000'  },          
        ],
      },
      {
        id: '8',
        title: 'Cetoacidosis diabetica CAD y ERC',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSJsBLU/', color: '#000000'  },
          
        ],
      },
      {
        id: '9',
        title: 'Tromboembolia Pulmonar y CNAF',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSJH86y/', color: '#000000'  },
          
        ],
      },

      {
        id: '10',
        title: 'Colico renal Y AINES',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSJVXoD/', color: '#000000'  },
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSJxywD/', color: '#000000'  },
          
        ],
      },

      {
        id: '11',
        title: 'Envenenamiento por metanol',
        buttons: [
          { icon: <Icon name="youtube-play" size={20} color="white"/>, url: 'https://www.youtube.com/watch?v=BRxXmzB29Lk', color: '#FF0000'  },
           
        ],
      },
      {
        id: '12',
        title: 'Priapismo y GLobo vesical',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSeLN6h/', color: '#000000'  },
          { icon: <Icon name="youtube-play" size={20} color="white"/>, url: 'https://www.youtube.com/watch?v=oY8EvQIRJDc', color: '#FF0000'  },
          
        ],
      },

      {
        id: '13',
        title: 'Intox. por Órganos Fosforados y Carbamatos ',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSJWpxC/', color: '#000000'  },  
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSed6Q3/', color: '#000000'  }, 
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSej64V/', color: '#000000'  }, 
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSJvjEK/', color: '#000000'  }, 
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkShD6uf/', color: '#000000'  }, 
          
          
        ],
      },

      {
        id: '14',
        title: 'Exceso de atropinizacion ',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSJEg6M/', color: '#000000'  },      
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSBcU8H/', color: '#000000'  }, 
                   
        ],
      },

      {
        id: '15',
        title: 'Anafilaxia ',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSJtwX3/', color: '#000000'  },        
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSeL3hW/', color: '#000000'  },
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSJwaRg/', color: '#000000'  },   
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSMT37Y/', color: '#000000'  },   

          
                   
        ],
      },

      {
        id: '16',
        title: 'Nebulizacion en Anafilaxia ',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSJtWAt/', color: '#000000'  },                  
        ],
      },

      {
        id: '17',
        title: 'Asma',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSej5dG/', color: '#000000'  },
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSejKYE/', color: '#000000'  },   
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSJ31Ts/', color: '#000000'  },
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSed93A/', color: '#000000'  },  
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSeN19k/', color: '#000000'  },                 
        ],
      },
      
      {
        id: '18',
        title: 'Exacerbacion Asmatica en gestante',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSejAMp/', color: '#000000'  },
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSejJDB/', color: '#000000'  },
                           
        ],
      },

      {
        id: '19',
        title: 'Convulsion',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSJTerG/', color: '#000000'  },
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSJcdUT/', color: '#000000'  },
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSeYx5a/', color: '#000000'  },
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSJ7xBc/', color: '#000000'  },
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSJW9jG/', color: '#000000'  },
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSJtVWD/', color: '#000000'  },
          
                           
        ],
      },

      {
        id: '20',
        title: 'Gran quemado',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSe5Pjn/', color: '#000000'  },         
                           
        ],
      },

      {
        id: '21',
        title: 'Aneurisma de Aorta',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSexyUr/', color: '#000000'  },         
                           
        ],
      },

      {
        id: '22',
        title: 'Mordedura de Perro',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSeQX2c/', color: '#000000'  }, 
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSMw4sf/', color: '#000000'  }, 
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSMKkQb/', color: '#000000'  }, 

                           
        ],
      },

      {
        id: '23',
        title: 'Profilaxis antirrabica (rabia)',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSeHfmU/', color: '#000000'  },
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSeX557/', color: '#000000'  },         
                           
        ],
      },

      {
        id: '24',
        title: 'Profilaxis antitetanica',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSekhoA/', color: '#000000'  },                              
        ],
      },

      {
        id: '25',
        title: 'Traumatismo encefalocraneano TEC 1',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSeDy9r/', color: '#000000'  },  
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSe4RRq/', color: '#000000'  }, 
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSehyAo/', color: '#000000'  }, 
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSerhQE/', color: '#000000'  },
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSeyFUC/', color: '#000000'  },
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSexaKx/', color: '#000000'  },
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSeXcQA/', color: '#000000'  },       
                                     
        ],
      },


      {
        id: '26',
        title: 'Traumatismo encefalocraneano TEC 2',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSeXnJF/', color: '#000000'  },
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSeBrey/', color: '#000000'  },
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSefNBy/', color: '#000000'  },
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSerr4c/', color: '#000000'  }, 
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSjPexS/', color: '#000000'  }, 

                           
        ],
      },

      {
        id: '27',
        title: 'Solucion hipertonica SSH TEC',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSemtux/', color: '#000000'  },   
                           
        ],
      },

      {
        id: '28',
        title: 'Picadura de abeja Anafilaxia, Intraosea',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSeydUt/', color: '#000000'  },   
                           
        ],
      },

      {
        id: '29',
        title: 'Parada cardiorespiratoria 1',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSeMdAu/', color: '#000000'  },   
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSeQuva/', color: '#000000'  }, 
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSe7hoE/', color: '#000000'  }, 
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSdRxmN/', color: '#000000'  }, 
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSeWFES/', color: '#000000'  },          
                           
        ],
      },

      {
        id: '30',
        title: 'Parada cardiorespiratoria 2',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSdRYG6/', color: '#000000'  },
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSevWXD/', color: '#000000'  },
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSeGbWH/', color: '#000000'  },
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSeoU41/', color: '#000000'  },
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSesVAV/', color: '#000000'  },   
                 
                           
        ],
      },

      {
        id: '31',
        title: 'Parada cardiorespiratoria 3',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSS1YSK/', color: '#000000'  },  
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSSCk4K/', color: '#000000'  },  

          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSSREBh/', color: '#000000'  },            
                           
        ],
      },

      {
        id: '32',
        title: 'Parada cardiorespiratoria niño, anafilaxia',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSenTpK/', color: '#000000'  },            
                           
        ],
      },

      {
        id: '33',
        title: 'preeclampsia eclampsia',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSesyYr/', color: '#000000'  },            
                           
        ],
      },

      {
        id: '34',
        title: 'STROKE, ictus, "derrame", ACV isquemico/ hemorragico',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkS22aVP/', color: '#000000'  },
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkS2AgPy/', color: '#000000'  },         
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkS2APEo/', color: '#000000'  },      
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkS2LJnT/', color: '#000000'  },  
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkS2DK8G/', color: '#000000'  },  
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkS2hSTe/', color: '#000000'  }, 
                           
        ],
      },

      {
        id: '35',
        title: 'Hipoglicemia',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkS2NA2E/', color: '#000000'  },     
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkS2aXsk/', color: '#000000'  },     
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkS2YVRp/', color: '#000000'  },  
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkS2mh9e/', color: '#000000'  },   
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkS2cCnj/', color: '#000000'  },   
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSjXNtf/', color: '#000000'  },  
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSDPqHt/', color: '#000000'  },  
                           
        ],
      },

      {
        id: '36',
        title: 'Mordedura de araña Loxocelismo/Latrodectus',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkS2sH2X/', color: '#000000'  },    
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkS2abjB/', color: '#000000'  },     
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkS2bJgL/', color: '#000000'  },     
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkS2wBoB/', color: '#000000'  },    
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkS298Qy/', color: '#000000'  }, 
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSjxd5U/', color: '#000000'  }, 
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSjp423/', color: '#000000'  }, 
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkS6BYaP/', color: '#000000'  }, 
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSSbaAU/', color: '#000000'  }, 

          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSSyLEJ/', color: '#000000'  },
           
        ],
      },
      {
        id: '37',
        title: 'Triangulo evaluacion pediatrica',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSjgLdv/', color: '#000000'  },   
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSjCc58/', color: '#000000'  },          
                           
        ],
      },

      {
        id: '38',
        title: 'Intoxicacion alimentaria carbon activado/lavado gastrico',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSjqDSs/', color: '#000000'  },   
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSjVvuf/', color: '#000000'  },    
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkS6N8y2/', color: '#000000'  }, 
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkS6F6gM/', color: '#000000'  }, 
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkS68s9G/', color: '#000000'  },
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSh623x/', color: '#000000'  },

                           
        ],
      },

      {
        id: '39',
        title: 'Canula Nasofaringea',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSrRuCc/', color: '#000000'  },   
                           
        ],
      },
      {
        id: '40',
        title: 'Tres ruidos al enfocar manejo de via aerea',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSMEpsa/', color: '#000000'  },   
                           
        ],
      },

      {
        id: '41',
        title: 'TIA/AIT "accidente cereebral isquemico" transitorio',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSryQfY/', color: '#000000'  },   
        ],
      },

      {
        id: '42',
        title: 'Paro cardiaco por inmersion',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSrHo6A/', color: '#000000'  },
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSrhtv4/', color: '#000000'  },
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSrfcU2/', color: '#000000'  },
            
        ],
      },

      {
        id: '43',
        title: 'Paro cardiaco en gestantes RCP',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSrh8oG/', color: '#000000'  },   
        ],
      },
      {
        id: '44',
        title: 'Conmotio Cordis /paro cardiaco tras un golpe',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSroWL8/', color: '#000000'  },   
        ],
      },
      {
        id: '45',
        title: 'TSVP taquicardia supraventricular paroxistica/maniobra de vasalva modificada',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSrvD8h/', color: '#000000'  },   
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSrEMBD/', color: '#000000'  },
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSh6Bou/', color: '#000000'  },
        ],
      },

      {
        id: '46',
        title: 'Ingesta Causticos: acidos y alcalis',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkShhAjr/', color: '#000000'  },   
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkShNXjx/', color: '#000000'  }, 
        ],
      },
      {
        id: '47',
        title: 'Ingesta HC, diesel niños',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkShk11J/', color: '#000000'  },   
          
        ],
      },

      {
        id: '48',
        title: 'Picadura de Raya',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkShrLSg/', color: '#000000'  },   
          
        ],
      },

      {
        id: '49',
        title: 'Intoxicacion por piretroides',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkShSxhT/', color: '#000000'  },  
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkShUhYh/', color: '#000000'  },   
          
        ],
      },
      {
        id: '50',
        title: 'Picadura de Escorpion',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSh4ok1/', color: '#000000'  },   
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkShVTCG/', color: '#000000'  },  
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkShxyec/', color: '#000000'  },  
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkShGR5P/', color: '#000000'  },
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkShX89f/', color: '#000000'  },
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSh4oTx/', color: '#000000'  },
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkShgNHd/', color: '#000000'  },
          
        ],
      },
      {
        id: '51',
        title: 'Intoxicacion por Hg (Mercurio)',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSSFEo8/', color: '#000000'  },  
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSBW5ks/', color: '#000000'  },   
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSSrs8P/', color: '#000000'  },  
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSBWn3P/', color: '#000000'  }, 
                   
          
        ],
      },
      {
        id: '52',
        title: 'Insuficiencia respiratoria en I nivel',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSBEwNj/', color: '#000000'  },   
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSSBoda/', color: '#000000'  },   
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSSH8dM/', color: '#000000'  }, 
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSSV3Nj/', color: '#000000'  }, 
          
        ],
      },
      {
        id: '53',
        title: 'Hipernatremia',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSBTbHj/', color: '#000000'  },   
          
        ],
      },

      {
        id: '54',
        title: 'Uso de PEEP y cuando NO ',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSA8c5M/', color: '#000000'  },   
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSSHQYY/', color: '#000000'  },
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSSTknr/', color: '#000000'  },
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSSTGVk/', color: '#000000'  },
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSSt6RW/', color: '#000000'  },
          
        ],
      },
      {
        id: '55',
        title: 'Uso de AMBU',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSSovwk/', color: '#000000'  },   
          
        ],
      },
      {
        id: '56',
        title: 'Flujo inspiratorio',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSSEbfg/', color: '#000000'  },   
          
        ],
      },
      {
        id: '57',
        title: 'Canula Binasal',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSA8khy/', color: '#000000'  },   
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSANQx6/', color: '#000000'  },
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSS3SU4/', color: '#000000'  },
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSA6A4f/', color: '#000000'  },
          
        ],
      },
      {
        id: '58',
        title: 'Diferencias entre bajo y alto flujo',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSAyN8f/', color: '#000000'  },
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSAv79v/', color: '#000000'  },  
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSDRTjp/', color: '#000000'  },  

          
        ],
      },
      {
        id: '59',
        title: 'Mielinolisis pontina /TEC',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSA9uSt/', color: '#000000'  },   
          
        ],
      },
      {
        id: '60',
        title: 'SEPSIS',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSAgN44/', color: '#000000'  },   
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSA7rCU/', color: '#000000'  },  
                   
          
        ],
      },
      {
        id: '61',
        title: 'Hiperkalemia Severa',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSAp52j/', color: '#000000'  }, 
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSAoKdN/', color: '#000000'  },
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSDYMXK/', color: '#000000'  },
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSDrBpA/', color: '#000000'  },
                             
        ],
      },
      {
        id: '62',
        title: 'TEP Tromboembolia Pulmonar',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSAcKUN/', color: '#000000'  }, 
                                     
        ],
      },
      {
        id: '63',
        title: 'Hipokalemia',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSDLhKA/', color: '#000000'  }, 
                                     
        ],
      },

      {
        id: '64',
        title: 'Infarto cara inferior',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSDxYLj/', color: '#000000'  }, 
                                     
        ],
      },
      {
        id: '65',
        title: 'Bloqueo de rama izquierda y rama derecha',
        buttons: [
          { icon: <Ionicons name="logo-tiktok" size={20} color="white" />, url: 'https://vm.tiktok.com/ZMkSDPVh6/', color: '#000000'  }, 
                                     
        ],
      },


      


    // ... demás emergencias
  ];

  // Filtrar emergencias según el texto de búsqueda
  const filteredEmergencies = emergencies.filter((emergency) =>
    emergency.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>
      El contenido presentado a continuación está compuesto por sugerencias diseñadas para apoyar en casos de emergencia. SE RECOMIENDA VISUALIZAR LOS VIDEOS ANTES de acudir a un establecimiento de salud, con el fin de refrescar los conocimientos adquiridos durante tu formación académica. Es fundamental recordar que siempre debe primar tu criterio profesional como responsable directo de la atención médica.

      Tanto el desarrollador  como el creador de contenido se exoneran de cualquier responsabilidad derivada de acciones o decisiones incorrectas realizadas por el profesional que brinda la atención directa.

      El contenido presentado en esta plataforma no sustituye el juicio clínico ni la responsabilidad directa del médico tratante. Todas las recomendaciones, sugerencias o consejos compartidos, ya sea a través de esta plataforma o por los telementores, se basan en conocimientos y experiencias generales, y no están diseñados para abordar casos específicos. Por este motivo, bajo ninguna circunstancia reemplazan la evaluación directa e individual que debe realizar el médico tratante.
      {'\n\n'}

      Esta sección cuenta con el apoyo de Vortex - Emergencias, un canal orientado a comentar y apoyar en temas relacionados con emergencias médicas.

      Antes de detallar los ítems relacionados con emergencias, se proporcionarán los canales respectivos para su acceso. Si eres especialista en emergencias y desastres, tienes la opción de unirte al voluntariado. Para usuarios pueden solicitar una telementoría. Para ello, deberás enviar el documento adjunto correspondiente completamente llenado en formato PDF dentro del correo. La respuesta será brindada en un tiempo prudente, acorde a la disponibilidad, y si por algun tema laboral, academico u otro, no se logra dar respuesta, pedimos la comprension del caso.


      </Text>

      {/* Botones principales */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.volunteerButton} onPress={handleVolunteerPress}>
          <Text style={styles.buttonText}>SER VOLUNTARIO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.iconButton, { backgroundColor: '#34B0E2' }]} onPress={() => handleOpenLink('https://t.me/+fWXp7uwRGXllOGZh')}>
          <Fontisto name="telegram" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.iconButton, { backgroundColor: '#000000' }]} onPress={() => handleOpenLink('https://www.tiktok.com/@vortex.emergencia?is_from_webapp=1&sender_device=pc')}>
          <Ionicons name="logo-tiktok" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.iconButton, { backgroundColor: '#FF0000' }]} onPress={() => handleOpenLink('https://www.youtube.com/@vortex-emergencias/featured')}>
          <Icon name="youtube-play" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.volunteerButton} onPress={handleTeleMPress}>
          <Text style={styles.buttonText}>SOLICITAR TELEMENTORIA PROYECTO ISAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.iconButton, { backgroundColor: '#2480F5' }]} onPress={() => handleOpenLink('https://docs.google.com/document/d/16mxQI9SUQGVVHAY44C15rXK0bH90x3KR/edit?usp=sharing&ouid=110697281472563324598&rtpof=true&sd=true')}>
          <Fontisto name="justify" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Buscador */}
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar emergencias..."
        value={searchText}
        onChangeText={setSearchText}
      />

      {/* Lista de emergencias */}
      <FlatList
        data={filteredEmergencies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.emergencyRow}>
            <Text style={styles.emergencyText}>{item.title}</Text>
            {item.buttons.map((button, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.smallButton, { backgroundColor: button.color }]}
                onPress={() => handleOpenLink(button.url)}
              >
                {button.icon}
              </TouchableOpacity>
            ))}
          </View>
        )}
      />
    </ScrollView>
  );
};

export default EmgRurales;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'azure',
  },
  text: {
    fontSize: 16,
    marginBottom: 16,
    lineHeight: 24,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  volunteerButton: {
    flex: 1,
    backgroundColor: '#53357B',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginRight: 8,
  },
  iconButton: {
    padding: 10,
    borderRadius: 5,
    width: 60,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  emergencyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  emergencyText: {
    flex: 1,
    fontSize: 16,
  },
  smallButton: {
    padding: 5,
    borderRadius: 5,
    marginLeft: 8,
    alignItems: 'center',
  },
});
