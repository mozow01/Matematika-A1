Theorem cosine_theorem_algebraic_core : forall u v : Vec3,
  dot (vsub v u) (vsub v u) =
  dot v v + dot u u - 2 * dot u v.
Proof.
  intros [ux uy uz] [vx' vy' vz'].
  unfold dot, vsub.
  simpl.
  ring.
Qed.

Print Assumptions cosine_theorem_algebraic_core.
