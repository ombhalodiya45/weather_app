import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

export default function InfoBox({info}) {

    const INIT_URL = "https://images.unsplash.com/photo-1714417830767-79dc641c6e65?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="infoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={INIT_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
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