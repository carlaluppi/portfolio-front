import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Image from '../../../assets/bg.svg'; 



export default class Home extends React.Component{
    render(){
        return(
            
                <Box display="flex" justifyContent="center" alignItems="center" elevation={0} 
                 sx={{   
                    backgroundImage: `url(${Image})`,
                    backgroundSixe: 'cover', 
                    height:"80vh",
                    width: '100%',
                    backgroundRepeat: "no-repeat",
                    maxHeight: { xs: "80vh", sm: "80vh", lg: "80vh" },
                    maxWidth: { xs: "30%", sm: "50%", lg: "100%"  },

                    
                }}>
                    <Box display="flex"  justifyContent="center" alignItems="center" color="grey"
                    sx={{
                        width: 620, 
                        height: 270,
                        border: "3px solid #e4e4e496"

                    }}>
                            <Box display="flex"  justifyContent="center" alignItems="center"
                                sx={{
                                    width: 600,
                                    height: 250,
                                    backgroundColor:" #e4e4e483",
                                    zIndex: 0,
                                    maxHeight: { xs: 200, sm: 200, lg: 250 },
                                    maxWidth: { xs: 600, sm: 600, lg: 600 },
                                }}>
                                <Box  justifyContent="center" alignItems="center" >

                                    <h1> Hola, Soy Carla</h1> 
                                    <p justifyContent="center" alignItems="center" > Desarrolladora Junior Full Stack </p>
                                
                                </Box>   
                            </Box>                      
                        </Box>
                    </Box>
                
            
        )
    }
}