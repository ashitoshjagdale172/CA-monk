import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import women from "../assets/Images/woman.png";
import infosys from "../assets/Images/infosys.png";

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};
const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
});
const Testimonials = () => {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

 



  return (
    <div className="bg-[#064bb3] px-[80px] pt-[80px]">
      <div className=" flex justify-evenly items-center">
        <div>
          <div className="text-white text-[16px]">Testimonials</div>
          <div className="text-[30px] text-white font-[700]">
            What Our <br /> <span className="text-[#FF7F00]">Student</span> Have{" "}
            <br /> To Say...
          </div>
        </div>
        <div className=" bg-white rounded-[10px] w-[600px] h-[300px]">
          <div className=" flex  items-center ml-10 mt-10">
            <div >
              <img src={women} alt="" className=" h-16 w-16 rounded-[10px]" />
            </div>
            <div className=" flex flex-col ml-6">
              
              <div className="text-[16px] font-[600] text-gray-800">Kirti Agarwal</div>
              <div>
                <img src={infosys} alt="" className="h-[25px] ml-5" />{" "}
              </div>
            </div>
          </div>
          <div className=" text-[13px] text-gray-600 font-[500] px-10 pt-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente veniam architecto doloremque ullam officia id sed dolores explicabo? Distinctio fuga tenetur eos at molestias aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, tenetur.</div>
          <div></div>
        </div>
      </div>
      <div>  <div className={classes.root}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
    </div></div>
    </div>
  );
};

export default Testimonials;
