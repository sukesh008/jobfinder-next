import { MenuItem, Select } from "@mui/material"





const SelectOption=(props)=>{

    const {option=[],placeHolder="",name="",value="",handleChange=()=>{},className="",handleClick=()=>{}}=props


    return <Select
                      onChange={handleChange}
                      onClick={handleClick}
                      name={name}
                      value={value}
                      displayEmpty
                      className={className}
                      sx={{
                        height: 40,
                        display: "flex",
                        alignItems: "center",
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "var(--lighter-gray)",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "var(--primary-blue)",
                        },
                      }}
                    >
                      <MenuItem value="" disabled>
                        {placeHolder}
                      </MenuItem>
                     {
                        option.map((data)=>{
                            return <MenuItem value={data}>{data}</MenuItem>
                        })
                     }
                    </Select>

}

export default SelectOption