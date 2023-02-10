const Button = (props) => {
  //  Write your code here.
  const { className, btText } = props;
  return <button className={`button ${className}`}>{btText}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <div className="card-container">
      <h1 className="heading">Social-Buttons</h1>
      <div className="button-container">
        <Button className="like-btn" btText="Like" />
        <Button className="comment-btn" btText="Comment" />
        <Button className="share-btn" btText="Share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
