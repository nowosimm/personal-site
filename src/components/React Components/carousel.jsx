export default function CarouselComponent({ projectId }) {
  if (!projects || projects.length === 0) {
    return <p>Loading projects…</p>;
  }

  const project = projects.find((p) => p.id === projectId);
  if (!project) return <p>Project not found</p>;

  return (
    <MantineWrapper>
      <Carousel withIndicators emblaOptions={{ loop: true, align: "start" }}>
        {project.images.map((src, index) => (
          <Carousel.Slide key={index}>
            <Image src={src} alt={`${project.title} slide ${index + 1}`} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </MantineWrapper>
  );
}
