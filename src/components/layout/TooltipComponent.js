import React from "react";
import { Tooltip, OverlayTrigger, Button } from "react-bootstrap";

function TooltipComponent() {
  return (
    <div className="p-5">
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-top">This is a tooltip!</Tooltip>}
      >
        <Button variant="primary">Hover me</Button>
      </OverlayTrigger>
    </div>
  );
}

export default TooltipComponent;
