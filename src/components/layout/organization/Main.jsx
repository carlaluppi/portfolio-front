import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
// import IconButton from 'material-ui/IconButton';
// import ActionHome from 'material-ui/svg-icons/action/home';

import Image from '../../../assets/bg.svg'; // Import using relative path




export default class Home extends React.Component{
    render(){
        return(

            

            
                <Box display="flex" justifyContent="center" alignItems="center" elevation={0} sx={{
                    backgroundImage: `url(${Image})`,
                    height:"80vh",
                    backgroundRepeat: "no-repeat",
                    
                }}>
                    
                    <Box display="flex"  >
                    <Paper 
                        sx={{
                            width: 1000,
                            height: 300,
                            backgroundColor: 'gray',
                            opacity: 0.2,
                            
                        }}
                        />
                    </Box>
                </Box>
                
            
        )
    }
}