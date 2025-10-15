
import videoorientacion from '../../../assets/videos/orientacion.mp4'

export default function OrientaVideoCard() {
  return (
    <div className="card orienta-card mb-4 mx-auto" style={{ maxWidth: 900 }}>
      <div className="card-header orienta-card-header">Para empezar</div>

      {/* Texto arriba */}
      <div className="card-body text-center">
        <p className="card-text mb-2">
          Aquí te dejamos un video que puede servir para que te hagas una idea.
        </p>
       
      </div>

      {/* Video centrado y con la misma altura por dios al fin */}
      <div className="row g-0 justify-content-center px-3 pb-4">
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <div className="orienta-video-fixed">
            <video
              src={videoorientacion}
              controls
              playsInline
              preload="metadata"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
                borderRadius: "8px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

