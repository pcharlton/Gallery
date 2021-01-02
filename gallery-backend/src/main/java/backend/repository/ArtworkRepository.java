package backend.repository;

import backend.model.Artwork;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Artwork repository
 */
@Repository
public interface ArtworkRepository extends JpaRepository<Artwork, Long>{
    @Query("SELECT Artwork FROM Artwork Artwork WHERE Artwork.title=(:title)")
    List<Artwork> findByTitle(@Param("title") String title);
}
