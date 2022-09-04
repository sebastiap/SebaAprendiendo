import { useState } from "react";
import "./styles.css"

import { Breadcrumbs } from "../../../components/common/Breadcrumbs";
import {  Grid, Card , CardHeader , Divider} from "@mui/material";
import { CreathusContainer } from "../../../components/common/CreathusContainer";

import ArticleIcon from '@mui/icons-material/Article';


const LIGHT_GREEN_COLOR = "#287276";
const LIGHT_GREY_COLOR = "#a2a2aa";
const LIGHT_BG_GREY_COLOR = "#bfc0c3";


const buttons = [{img:<ArticleIcon sx={{ fontSize: 70 }}/> , text:"Certidão de Informaçðes Técnicas em Geral"},
{img:<ArticleIcon sx={{ fontSize: 70 }} /> , text:"Certidão de endereço"},
{img:<ArticleIcon sx={{ fontSize: 70 }}/> , text:"Certidão de Informaçðes Técnicas para uso do solo"},
{img:<ArticleIcon sx={{ fontSize: 70 }}/> , text:"Certidão de Informaçðes Técnicas para uso e Ocupação do solo"},

]



export function CertidaoPage() {

  const [selected,setSelected] = useState(1);
  return (
    <CreathusContainer background="white" height="400" width="500" mHeight={200} mWidth={300}>      

    <Card >
      <CardHeader title="serviços para o cidadão" className="cardheader" />
      <Divider variant="middle" />
      <Grid container >    
        <Grid item xs={12} md={12} border="1px solid #fffffff1">
            <Grid container rowSpacing={1} >
            {buttons.map((button,index) => {

              return (  <Grid item xs={6} md={6} minHeight={250} sx={{display:"flex" ,justifyContent: "center", alignItems: "center"}}>
              <CreathusContainer border={(selected ==+ index +1 )?"1px solid" + LIGHT_GREEN_COLOR:"1px solid" + LIGHT_GREY_COLOR} 
              boxShadow= "-2px 5px 1px rgba(0, 0, 0, 0.13)"
              className={(selected ==+ index +1)?"selectedButton":"optionButton"  }
              onClick={() => {setSelected(index+1 )}}
              style={{height: 200, width: 250, display:"flex", justifyContent: "center" , alignItems: "center", 
              flexDirection:"column" }}>
                {button.img}
                {button.text}
              </CreathusContainer>
              </Grid>
              )
            })}
            </Grid>
            
        </Grid>
      </Grid>
      </Card>
    </CreathusContainer>
  );
}