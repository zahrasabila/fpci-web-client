import React from "react";
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";
import Thumbnail from "../assets/blog22.jpg";

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={`posts/werwer/edit`} className="btn sm primary">
              Edit
            </Link>
            <Link to={`posts/werwer/edit`} className="btn sm danger">
              Delete
            </Link>
          </div>
        </div>
        <h1>This is The Post Title!</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          voluptatibus saepe excepturi optio dolore aliquid rerum sunt nulla
          ducimus eaque pariatur maxime cum fuga commodi, libero sequi doloribus
          fugit ipsa magni provident consectetur! Quo eligendi officiis odio hic
          illo enim!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          illum asperiores, quis, iure eum atque libero molestiae corporis, ipsa
          dolore tenetur consectetur vero quae. Voluptates, deleniti tenetur est
          voluptatum, consequatur temporibus totam dolor praesentium in illo
          iusto eos a molestias ab porro cupiditate libero, quae pariatur ut.
          Eos laborum, ab omnis magni quos perferendis culpa.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          tenetur consequuntur cumque quam eaque sint labore distinctio
          quibusdam aliquid ratione praesentium corrupti modi aspernatur omnis,
          exercitationem natus doloremque non delectus quas placeat. Velit,
          animi doloremque ut voluptas in molestiae dolorem repellendus, dolorum
          dolor quidem, rerum et. Hic, cumque illo. Eum reiciendis atque
          consequatur tenetur, esse magnam quasi nulla sequi dolor accusantium
          cupiditate nemo, eius ipsa numquam voluptatibus. Quasi, ipsum
          asperiores. Mollitia, temporibus illum voluptates, animi consequatur
          odio deleniti molestiae dolore dicta, ut aliquid inventore. Harum
          facere reiciendis molestias neque dolor earum saepe. Enim vel repellat
          reiciendis sed nisi deserunt, voluptatum esse, inventore soluta quas,
          modi neque nesciunt animi ipsa unde? Molestias!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, ipsum.
          Harum sapiente dolores cupiditate quia asperiores voluptas molestias
          neque quidem est. Atque?
        </p>
      </div>
    </section>
  );
};

export default PostDetail;
