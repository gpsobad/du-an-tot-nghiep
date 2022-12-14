import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function EditPictures({ item, data, openEdit, setOpenEdit, onSubmitEdit, isLoading }) {

    const { active, image } = item
    // const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        setDataEdit({
            active: active || '',
            image: item.image || ''
        })
    }, [item])

    const [dataEdit, setDataEdit] = useState({
        active: active || '',
        image: item.image || ''
    })

    const handleClose = () => setOpenEdit(false);

    const onChangeText = (e) => {
        setDataEdit({ ...dataEdit, [e.target.name]: e.target.value })
        console.log("onchange:", e.target.value);
    }

    const onChangeImage = (event) => {
        const value = event.target.files[0]
        console.log(value);
        // setSelectedImage(event.target.files[0])
        setDataEdit({ ...dataEdit, image: (value) })
    }

    const onClickEdit = (e) => {
        console.log(e);
        onSubmitEdit({ ...item, ...dataEdit, id: item.id })
    }

    const [valueStateCategory, setValueStateCategory] = useState('');

    const handleChangeCategory = (event) => {
        console.log(event.target.value);
        const value = event.target.value;
        setValueStateCategory(event.target.value);
        setDataEdit({ ...dataEdit, active: value });
    };

    return (
        <Modal
            open={openEdit}
            onClose={setOpenEdit}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className='form-add-address'
                sx={{
                    width: '40%',
                    position: 'relative',
                    transform: "translate(-50%, -50%)",
                    backgroundColor: 'white',
                    padding: '10px',
                    top: "50%",
                    left: "50%"
                }}>
                <h2 style={{ textAlign: 'center' }}>S???a th??ng tin ???nh</h2>
                <div style={{ display: 'flex', flexDirection: "column-reverse", margin: "10px" }} className="form-flex">
                    {/* <FormControl fullWidth sx={{ margin: "5px" }}>
                        <InputLabel id="demo-simple-select-label">Lo???i ???nh</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={dataEdit.category}
                            onChange={handleChangeCategory}>
                            <MenuItem value={'banner'}>???nh banner</MenuItem>
                            <MenuItem value={'logo'}>???nh logo</MenuItem>
                            <MenuItem value={'about'}>???nh about us</MenuItem>
                        </Select>
                    </FormControl> */}
                    <FormControl fullWidth sx={{ margin: "5px" }}>
                        <InputLabel id="demo-simple-select-label">Hi???n ???nh</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={dataEdit.active}
                            onChange={handleChangeCategory}>
                            <MenuItem value={'true'}>Hi???n</MenuItem>
                            <MenuItem value={'false'}>???n</MenuItem>
                        </Select>
                    </FormControl>
                    {/* <TextField onChange={onChangeImage} style={{ margin: '5px -5px 5px 5px' }}
                        name="image" type="file" multiple accept="image/*" /> */}
                </div>

                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button sx={{ marginRight: "5px" }} onClick={handleClose} variant="contained" color="success">
                        ????ng
                    </Button>
                    <Button disabled={isLoading} onClick={onClickEdit} variant="contained" color="success">
                        {isLoading ? "Xin ch??? ..." : "X??c nh???n"}
                    </Button>
                </div>

            </Box>

        </Modal >
    )
}
