import { Button } from "@mui/material";

export default function GradientButton() {
    return (
      <Button
        variant="contained"
        sx={{
          background: "linear-gradient(45deg, #2196f3 30%, #00b0ff 90%)",
          borderRadius: "3px",
          border: 0,
          color: "white",
          height: "48px",
          padding: "0 30px",
          boxShadow: "0 3px 5px 2px rgba(33, 150, 243, 0.3)",
          transition: "box-shadow 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0 3px 5px 2px rgba(33, 150, 243, 0.3)",
          },
        }}
      >{}
      </Button>
    );
  }
  