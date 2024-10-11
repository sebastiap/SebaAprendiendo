//componente de ejemplo

import { Grid, ToggleButtonGroup, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";

import { Controller } from "react-hook-form";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Column } from "~/components/Column";
import { Row } from "~/components/Row";
import { SizedBox } from "~/components/SizedBox/style";
import { ScheduleVacancy } from "./components/Schedule/Schedule";
import { Vacancy } from "./components/Schedule/Vacancy";
import CalendarComponent from "./components/Schedule/Calendar";
import { useAuthContext } from "~/store/contexts/AuthContext";
import { horarioDisponivelMock } from "./mock";
import {
  FONT_STYLE_POPPINS_XL_GRAY,
  FONT_STYLE_POPPINS_XL_GREEN_BOLD,
} from "~/styles/font-style";
import {
  AVAILABLE_SCHEDULING,
  INTERESTED,
  SELECT_DATE,
  SERVICE_SELECTED,
  SPOTS,
} from "../../strings";

import "./styles.css";
import { CreathusContainer } from "~/components/Container";
import { AccessTime, AccessTimeFilled } from "@mui/icons-material";
import { CreathusText } from "~/components/Text";
import { setTimeout } from "timers/promises";
import { margin } from "@mui/system";
  var interval;
export const DateLocationStep = (props: {
  getData: any;
  data: { description: any };
}) => {
  const { getData, data } = props;
  const user = useAuthContext().user;

  const [alignment, setAlignment] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [daySelected, setDaySelected] = useState("");
  const [timeBox, setTimeBox] = useState("60")
  const [showTimeBox, setShowTimeBox] = useState(null);
  const [intervals, setIntervals] = useState(0);



  var timeaux = 60;

  useEffect(() => {
    getData({ time, date });
  });
  

  useEffect(() => {
    //console.log("pase")
      if(showTimeBox){
       //console.log("Intervalo", interval)
        startTimer();
   
      
      
    }
     }, [showTimeBox]);

     useEffect(() => {
      //console.log("pase 2")
        if(intervals > 0 ){
         //console.log("Intervalo", interval , intervals)
          startTimer();
     
        
        
      }
       }, [intervals]);
  const startTimer = ()=>{
    timeaux = 60;
    setTimeBox("60");
    //console.log("anterior" , interval)
    clearInterval(interval)
    interval = setInterval(()=>{

      timeaux -= 1;
      if(parseInt(timeBox)>0){
     
        if(timeaux > 0 && timeaux < 10){
          setTimeBox("0"+timeaux.toString());
  
        } else {

          setTimeBox(timeaux.toString());

        }
        
   
    
  } 

  if(timeaux == 0 ){
    setTimeBox("00")
    clearInterval(interval);
    
  }
    },1000)
    //console.log("Nuevo Intervalo", interval)
  }

  const handleChange = (event: { target: { value: string } }) => {
    setAlignment(event.target.value as string);
  };

  return (
    <div className="containerDateLocation">
      <Row>
        <Grid item sm={12} md={4}>
          <Column>
            <Typography sx={FONT_STYLE_POPPINS_XL_GREEN_BOLD}>
              {INTERESTED}
            </Typography>
            <Typography sx={FONT_STYLE_POPPINS_XL_GRAY}>{user.name}</Typography>
          </Column>
        </Grid>
        <Grid item xs={12} sm={12} md={3} >
          <Column>
            <Typography
              sx={FONT_STYLE_POPPINS_XL_GREEN_BOLD}
              color="text.primary"
            >
              {SERVICE_SELECTED}{" "}
            </Typography>
            <Typography sx={FONT_STYLE_POPPINS_XL_GRAY}>
              {data.description != undefined && data.description}{" "}
            </Typography>
          </Column>
        </Grid>

        <Grid item md= {5}>

        {showTimeBox&& 

<CreathusContainer background="#f8f8f8" mRight={80} pHeight={70}>
  
  <Row alignY="center" >
 

<SizedBox width={20}>
<Grid item >
    <AccessTime sx={{color:"#777777"}}></AccessTime>              

    </Grid>
</SizedBox>


<Grid item style={{width:"40" }}  md={2} >

<CreathusText fontFamily="Poppins" color="#007074" fontWeight={800} fontSize={26} >
00:00:{timeBox}
</CreathusText>

</Grid>
<Grid item md={1}>

</Grid>
<Grid item md={7}>
<CreathusText color="#3C3C3C" fontFamily="Poppins" fontSize={16} fontWeight={400}>
Após este tempo, as vagas estarão disponíveis novamente.

</CreathusText>

</Grid>

  </Row>
  </CreathusContainer>}

        </Grid>
      </Row>

      <SizedBox height={60}></SizedBox>

      <Row>
        <Grid item lg={4} md={4}>
          <Column>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Typography sx={FONT_STYLE_POPPINS_XL_GREEN_BOLD}>
                {SELECT_DATE}{" "}
              </Typography>

              <CalendarComponent
                Changedata={(e) => {
                  setDate(e);

                  setDaySelected(e.substring(0, 2));
                }}
              ></CalendarComponent>
            </LocalizationProvider>
          </Column>
        </Grid>
        <Grid item md={4}>
          <Column>
            <Typography sx={FONT_STYLE_POPPINS_XL_GREEN_BOLD}>
              {AVAILABLE_SCHEDULING} {daySelected}
            </Typography>

            {horarioDisponivelMock &&
              horarioDisponivelMock.map((item) => (
                <Controller
                  name="horaAgendamento"
                  render={({ field }) => (
                    <ToggleButtonGroup
                      color="primary"
                      value={alignment}
                      exclusive
                      onChange={handleChange}
                      {...field}
                    >
                      {
                        <Row alignY="center">
                      
                      <div onClick={()=>{
                        timeaux = 60;
                        //console.log("'boton",interval);

                      setIntervals(intervals + 1)
                        setTimeBox("60");
                        clearInterval(interval)
                     setShowTimeBox(true);
                                        
                                        

}}>
                      <ScheduleVacancy
                            key={item.id}
                            schedule={item.horario}
                            Changedata={(e) => {
                            
                              setTime(e);
                              //console.log(e);
                            }}
                            color={
                              time == item.horario
                                ? "#81B0AC !important"
                                : "#B6DBD8 !important"
                            }
                          ></ScheduleVacancy>
                        
                      </div>
                          <SizedBox width={10}></SizedBox>
                          <Vacancy
                            key={item.vaga}
                            schedule={item.vaga + ` ${SPOTS}`}
                          ></Vacancy>
                        </Row>
                      }
                    </ToggleButtonGroup>
                  )}
                ></Controller>
              ))}
          </Column>
        </Grid>

        
      </Row>
    </div>
  );
};
