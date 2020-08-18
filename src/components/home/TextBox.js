import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import content from './../utils/ContentUtil'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '80ch',
        },
        '& label.Mui-focused': {
            color: green[600],
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: green[400],
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: green[400],
            },
            '&:hover fieldset': {
                borderColor: green[400],
            },
            '&.Mui-focused fieldset': {
                borderColor: green[600],
            },
        },
    },
}));

const Textbox = ({ questionId, answers }) => {
    const classes = useStyles();
    const answersList = answers.map((answer) => {
        return (
            <FormControlLabel
                className={classes.root}
                key={answer.id}
                control={<TextField label={content(answer.answerEn, answer.answerAr)} id={answer.id} multiline rows={4} variant="outlined" />}
            />
        )
    });

    return (
        <FormControl component="fieldset">
            {answersList}
        </FormControl>
    );
}

export default Textbox;  