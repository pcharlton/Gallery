package backend.controller;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;

import backend.model.Artwork;
import backend.repository.ArtworkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 *  REST controller for services to operate on Artworks
 */
@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000")
public class ArtworkController {
	@Autowired
	private ArtworkRepository artworkRepository;

	/**
	 * Retrieve all artworks
	 *
	 * @returns The list of retrieved artwork data and/or HTTP status code
	 *
	 * HTTP status code: OK for success, NOT_FOUND for no data retrieved
	 */
	@GetMapping("/artworks")
	public ResponseEntity<?> getAllArtworks() {
		List<Artwork> artworks = artworkRepository.findAll();
		if (artworks.isEmpty()) {
			return new ResponseEntity(HttpStatus.NOT_FOUND);
		}
		artworks.sort(Comparator.comparing(Artwork::getTitle));
		return ResponseEntity.ok(artworks);
	}

	/** Retrieve an artwork by id
	 *
	 * @param artworkId The artwork's id
	 * @return The retrieved artwork data and/or HTTP status code
	 *
	 * HTTP status code: OK for success, NOT_FOUND for no data retrieved
	 */
	@GetMapping("/artworks/{id}")
	public ResponseEntity<?> getArtworkById(@PathVariable(value = "id") Long artworkId) {
		Optional<Artwork> artwork = artworkRepository.findById(artworkId);
		if (!artwork.isPresent()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Artwork with id " + artworkId + " not found.");
		}
		return ResponseEntity.ok(artwork.get());
	}

	/**
	 * Create an artwork
	 *
	 * @param artwork The artwork's data
	 * @return HTTP status code
	 *
	 * HTTP status code: OK for success, CONFLICT for artwork with the same title already exists
	 */
	@PostMapping("/artworks")
	public ResponseEntity<?> createArtwork(@RequestBody Artwork artwork) {
		List<Artwork> existingArtwork = artworkRepository.findByTitle(artwork.getTitle());
		if (!existingArtwork.isEmpty())
		{
			return ResponseEntity.status(HttpStatus.CONFLICT).body("Artwork already exists, title : "
					+ artwork.getTitle());
		}
		artworkRepository.save(artwork);
		return ResponseEntity.ok().body(artwork);
	}

	/**
	 * Update an artwork
	 *
	 * @param artworkId The artwork's id
	 * @param artwork The artwork's data
	 * @return HTTP status code
	 *
	 * HTTP status code: OK for success, NOT_FOUND artwork was not found to delete
	 */
	@PutMapping("/artworks/{id}")
	public ResponseEntity<?> updateArtwork(@PathVariable(value = "id") Long artworkId, @RequestBody Artwork artwork) {
		Optional<Artwork> existingArtwork = artworkRepository.findById(artworkId);
		if (!existingArtwork.isPresent()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Artwork with id " + artworkId + " not found.");
		}

		Artwork artworkToUpdate = existingArtwork.get();
		artworkToUpdate.setTitle(artwork.getTitle());
		artworkToUpdate.setUrl(artwork.getUrl());
		artworkToUpdate.setNotes(artwork.getNotes());

		artworkRepository.save(artworkToUpdate);
		return ResponseEntity.ok().body(artworkToUpdate);
	}

	/**
	 * Delete an artwork by id
	 *
	 * @param artworkId The artwork's id
	 * @return HTTP status code
	 *
	 * HTTP status code: NO_CONTENT for success, NOT_FOUND artwork was not found to delete
	 */
	@DeleteMapping("/artworks/{id}")
	public ResponseEntity<?> deleteArtwork(@PathVariable(value = "id") Long artworkId) {
		Optional<Artwork> artwork = artworkRepository.findById(artworkId);
		if (!artwork.isPresent()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Artwork with id " + artworkId + " not found.");
		}
		artworkRepository.delete(artwork.get());
		return new ResponseEntity(HttpStatus.NO_CONTENT);
	}
}
