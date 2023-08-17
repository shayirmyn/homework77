import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface Props {
    author: string;
    message: string;
    image: string | null;
}

const CardForArticle: React.FC<Props> = ({author,message, image}) => {

    let cardImage = null;
    let infoImage = null;

    if (image) {
        cardImage = 'http://localhost:8000' + '/' + image;
        infoImage = (<CardMedia
            sx={{ height: 140 }}
            image={cardImage}
            title="picture"
        />)
    }


    return (
        <Card sx={{ maxWidth: 345, border: 1, mt: 2 }}>
            {infoImage}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {author ? author : 'Anonymous'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {message}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CardForArticle;