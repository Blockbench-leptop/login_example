import React, {useCallback, useEffect, useState} from "react"
import {Controller, useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from '@hookform/resolvers/yup'

import FormControl from "@material-ui/core/FormControl"
import FormGroup from "@material-ui/core/FormGroup"
import TextField from "@material-ui/core/TextField"
import {Button, Paper} from "@material-ui/core"
import Tooltip from '@material-ui/core/Tooltip';
import logo from '../../assets/img/hand-wave.png'
import classes from './LoginForm.module.scss'
import Grid from "@material-ui/core/Grid";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import clsx from "clsx"
import {useDispatch, useSelector} from "react-redux";
import {WinStorage} from "../../services/AuthSrorage";
import {fetchSignIn} from "../../store/branches/user/actionCreators";
import {selectUserStatus} from "../../store/branches/user/selectors";
import {LoadingStatus} from "../../store/types"


export interface RegisterFormProps {
    email: string
    password: string
}

const RegisterFormSchema = yup.object().shape({
    email: yup.string().email('Invalid email format').required('Email field is required'),
    password: yup.string().min(5, 'Minimum characters length 5 characters').required(),
});

const LoginForm: React.FC = () => {
    const dispatch = useDispatch()
    const [message, setMessage] = useState<'error' | 'success' | null>(null)
    const [checked, setChecked] = React.useState(false)

    const [loading, setLoading] = React.useState(false);

    const loadingStatus = useSelector(selectUserStatus);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    }

    const {control, handleSubmit, errors, reset} = useForm<RegisterFormProps>({
        resolver: yupResolver(RegisterFormSchema)
    })
    const login = useCallback((data) => {
        dispatch(fetchSignIn(data))
    }, [dispatch])

    const onSubmit = async (data: RegisterFormProps) => {
        if (checked) {
            setLoading(true)
            try {
                login(data)
                const isAuth = await WinStorage.isAuthenticated()
                if (isAuth) {
                    setMessage('success')
                }
            } catch (e) {
                setMessage('error')
            }
            setLoading(false)
            reset()
            setChecked(false)
        }
    }

    useEffect(() => {
        if (loadingStatus === LoadingStatus.ERROR) {
            setMessage('error')
        }
        return () => {
            setMessage(null)
        }
    }, [loadingStatus])

    return (
        <React.Fragment>
            <Paper className={classes.paper} elevation={0}>
                <Grid container alignItems="center" className={classes.box}>
                    <Paper className={classes.paper} elevation={0}>
                        <img src={logo} className={clsx(classes.image, classes.handWaveImg)} alt="logo"/>
                        <Paper className={classes.subtitle} elevation={0}>
                            <p>Welcome Agronomist!</p>
                        </Paper>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FormControl component="fieldset" fullWidth>
                                <FormGroup aria-label="position" row>

                                    <Tooltip title="Email is required" placement="right">
                                        <span className={classes.label}>Email<b>*</b></span>
                                    </Tooltip>
                                    <Controller as={TextField}
                                                control={control}
                                                name="email"
                                                className={classes.registerField}
                                                id="email"
                                                placeholder="name@mail.com"
                                                InputLabelProps={{shrink: true}}
                                                variant="outlined"
                                                type="email"
                                                defaultValue=""
                                                helperText={errors.email?.message}
                                                error={!!errors.email} fullWidth autoFocus/>

                                    <Tooltip title="Minimum characters length 6 characters" placement="right">
                                        <span className={classes.label}>Password<b>*</b></span>
                                    </Tooltip>
                                    <Controller as={TextField}
                                                className={classes.registerField}
                                                control={control}
                                                name="password"
                                                id="password"
                                                placeholder="Password"
                                                InputLabelProps={{shrink: true}}
                                                variant="outlined"
                                                type="password"
                                                defaultValue=""
                                                helperText={errors.password?.message}
                                                error={!!errors.password}
                                                fullWidth/>
                                    <div className={classes.checkbox}>
                                        <FormControlLabel
                                            control={<Checkbox color="default" checked={checked}
                                                               onChange={handleChange}/>}
                                            label={<p>I agree Policy</p>}
                                        />
                                    </div>
                                    {message === 'error' && !checked &&
                                    <span className={classes.info}>Do not forget apply the Policy!</span>}
                                    <Button type="submit"
                                            variant="contained"
                                            disabled={!checked || loading}
                                            className={classes.registerButton}
                                    >
                                        {loading ? "Loading..." : "Register"}
                                    </Button>
                                </FormGroup>
                            </FormControl>
                        </form>
                    </Paper>
                </Grid>
            </Paper>
        </React.Fragment>
    )
}
export default LoginForm
