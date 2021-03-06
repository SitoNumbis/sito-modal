import { forwardRef } from "react";

// sito components
import SitoContainer from "sito-container";

// prop-types
import PropTypes from "prop-types";

const SitoModal = forwardRef((props, ref) => {
  const {
    visible,
    onClose,
    transition,
    backdropBackground,
    backdropFilter,
    background,
    extraProps,
    children,
    display,
    alignItems,
    justifyContent,
    flexDirection,
    className,
    sx,
    id,
    name,
    style,
  } = props;

  const modalSx = {
    flexDirection,
    display,
    alignItems,
    justifyContent,
    background: background || "transparent",
    padding: "20px",
    borderRadius: "1rem",
    width: "250px",
    height: "250px",
    ...sx,
  };

  return (
    <SitoContainer
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: backdropBackground,
        backdropFilter: backdropFilter,
        zIndex: visible ? 99 : -1,
        transition,
      }}
      extraProps={{
        onClick: onClose,
      }}
    >
      <SitoContainer
        ref={ref}
        style={style}
        id={id}
        name={name}
        sx={{
          // opacity: visible ? 1 : 0,
          transition,
          transform: visible ? "scale(1)" : "scale(0)",
          opacity: visible ? 1 : 0,
          ...modalSx,
        }}
        className={className}
        {...extraProps}
      >
        {children}
      </SitoContainer>
    </SitoContainer>
  );
});

SitoModal.defaultProps = {
  transition: "all 500ms ease",
  backdropBackground: "#222222ec",
  backdropFilter: "blur(4px)",
  background: "#222333",
  alignItems: "left",
  justifyContent: "left",
  className: "",
  id: "",
  name: "",
  sx: {},
  style: {},
  extraProps: {},
  children: <span>This is a container</span>,
};

SitoModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
  animation: PropTypes.oneOf(["scale", "opacity"]),
  transition: PropTypes.string,
  backdropBackground: PropTypes.string,
  backdropFilter: PropTypes.string,
  background: PropTypes.string,
  className: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
  style: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
  extraProps: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default SitoModal;
