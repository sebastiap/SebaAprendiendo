import { useState } from "react";
import "./styles.css"

import { Breadcrumbs } from "../../../components/common/Breadcrumbs";
import {  Grid, Card , CardHeader , Divider} from "@mui/material";
import { CreathusContainer } from "../../../components/common/CreathusContainer";

import ArticleIcon from '@mui/icons-material/Article';


const LIGHT_GREEN_COLOR = "#287276";
const LIGHT_GREY_COLOR = "#a2a2aa";
const LIGHT_BG_GREY_COLOR = "#bfc0c3";


const buttons = [{img:<ArticleIcon sx={{ fontSize: 70 }}/> , text:"Certidoes"},
{img:<ArticleIcon sx={{ fontSize: 70 }} /> , text:"Aprovacoes"},
{img:<ArticleIcon sx={{ fontSize: 70 }}/> , text:"Licencas"},
{img:<ArticleIcon sx={{ fontSize: 70 }}/> , text:"Regurizacao"},
{img:<ArticleIcon sx={{ fontSize: 70 }}/> , text:"Alvara de Construcao"},
{img:<ArticleIcon sx={{ fontSize: 70 }}/> , text:"Habita-se"}
]




export function ServicePage() {

  const [selected,setSelected] = useState(1);
  return (
    <CreathusContainer background="white" height="400" width="500" mHeight={200} mWidth={300}>      

    <Card >
      <CardHeader title="serviços para o cidadão" className="cardheader" />
      <Divider variant="middle" />
      <Grid container >    
        <Grid item xs={12} md={12} border="1px solid #504c4c">
            <Grid container rowSpacing={4} >


            {buttons.map((button,index) => {

              return (  <Grid item xs={6} md={6} minHeight={150} sx={{display:"flex" ,justifyContent: "center", alignItems: "center"}}>
              <CreathusContainer border={(selected ==+ index +1 )?"1px solid" + LIGHT_GREEN_COLOR:"1px solid" + LIGHT_GREY_COLOR} boxShadow= "1px 2px 1px rgba(0, 0, 0, 0.47)"
              className={(selected ==+ index +1)?"selectedButton":"optionButton"  }
              onClick={() => {setSelected(index+1 )}}
              style={{height: 100, width: 250, display:"flex", justifyContent: "space-evenly" , alignItems: "center" }}>
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