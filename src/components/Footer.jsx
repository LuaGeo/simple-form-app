const Footer = ({ tech, school, student }) => {
  return (
    <footer>
      <p>
        Made with<span> {tech} </span>at<span> {school} </span>by
        <span> {student} </span>
      </p>
    </footer>
  );
};

export default Footer;
