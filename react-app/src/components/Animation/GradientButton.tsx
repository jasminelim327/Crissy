import { Button } from "@mui/material";

export default function GradientButton() {
    return (
      <Button
        sx={{
          bbackgroundColor: "transparent",
          borderRadius: "3px",
          border: 0,
          color: "white",
          height: "48px",
          padding: "0 30px",
          boxShadow: "0 3px 5px 2px rgba(33, 150, 243, 0.3)",
          transition: "box-shadow 0.3s ease-in-out",
          overflow: "hidden",
          position: "relative",
          "&:hover": {
            boxShadow: "0 3px 5px 2px rgba(33, 150, 243, 0.3)",
          },
        }}
      >{}
      </Button>
    );
  }
  