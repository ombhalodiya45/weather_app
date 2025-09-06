import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import CloudIcon from '@mui/icons-material/Cloud';


export default function InfoBox({ info }) {

    const INIT_URL = "https://images.unsplash.com/photo-1714417830767-79dc641c6e65?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAINY_URL = "https://images.unsplash.com/photo-1599806112354-67f8b5425a06?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const SUNNY_URL = "https://images.unsplash.com/photo-1547899818-c3159263dd1b?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const CLOUDY_URL = "https://images.unsplash.com/photo-1611928482473-7b27d24eab80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const STROM_URL = "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="infoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <div style={{ position: 'relative' }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={
                                !info.city ? INIT_URL :
                                    (info.weather && info.weather.toLowerCase().includes("storm")) ? STROM_URL :
                                        (info.weather && info.weather.toLowerCase().includes("rain")) ? RAINY_URL :
                                            (info.weather && info.weather.toLowerCase().includes("cloud")) ? CLOUDY_URL :
                                                (typeof info.temp === "number" && info.temp <= 10) ? COLD_URL :
                                                    (typeof info.temp === "number" && info.temp >= 25) ? SUNNY_URL :
                                                        SUNNY_URL
                            }
                        />
                        {/* Overlayed weather icon */}
                        <div style={{
                            position: 'absolute',
                            top: 10,
                            right: 10,
                            background: 'rgba(255,255,255,0.7)',
                            borderRadius: '50%',
                            padding: 4,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {
                                !info.city ? null :
                                    (info.weather && info.weather.toLowerCase().includes("storm")) ? <ThunderstormIcon fontSize="large" /> :
                                        (info.weather && info.weather.toLowerCase().includes("rain")) ? <ThunderstormIcon fontSize="large" /> :
                                            (info.weather && info.weather.toLowerCase().includes("cloud")) ? <CloudIcon fontSize="large" /> :
                                                (typeof info.temp === "number" && info.temp <= 10) ? <AcUnitIcon fontSize="large" /> :
                                                    (typeof info.temp === "number" && info.temp >= 25) ? <SunnyIcon fontSize="large" /> :
                                                        <SunnyIcon fontSize="large" />
                            }
                        </div>
                    </div>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                            {
                                !info.city ? null :
                                    (info.weather && info.weather.toLowerCase().includes("storm")) ? <ThunderstormIcon /> :
                                        (info.weather && info.weather.toLowerCase().includes("rain")) ? <ThunderstormIcon /> :
                                            (info.weather && info.weather.toLowerCase().includes("cloud")) ? <CloudIcon /> :
                                                (typeof info.temp === "number" && info.temp <= 10) ? <AcUnitIcon /> :
                                                    (typeof info.temp === "number" && info.temp >= 25) ? <SunnyIcon /> :
                                                        <SunnyIcon />
                            }
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Weather - {info.weather}</p>
                            <p>Temperature - {info.temp}&deg;C</p>
                            <p>Min Temp - {info.tempMin}&deg;C</p>
                            <p>Max Temp - {info.tempMax}&deg;C</p>
                            <p>humidity - {info.humidity}</p>
                            <p>The Weather can be described as <b>{info.weather}</b> and Feels Like <b>{info.feelsLike}&deg;C</b></p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}