Theorem standard_basis_expansion : forall v : Vec3,
  v = vadd (vadd (vscale (vx v) i) (vscale (vy v) j))
           (vscale (vz v) k).
Proof.
  intros [x y z].
  apply vec3_extensionality; simpl; ring.
Qed.

Theorem standard_coordinates_unique : forall x y z x' y' z' : R,
  vadd (vadd (vscale x i) (vscale y j)) (vscale z k) =
  vadd (vadd (vscale x' i) (vscale y' j)) (vscale z' k) ->
  x = x' /\ y = y' /\ z = z'.
Proof.
  intros x y z x' y' z' Hequal.
  pose proof (f_equal vx Hequal) as Hx.
  pose proof (f_equal vy Hequal) as Hy.
  pose proof (f_equal vz Hequal) as Hz.
  unfold vadd, vscale, i, j, k in Hx, Hy, Hz.
  simpl in Hx, Hy, Hz.
  split.
  - nra.
  - split; nra.
Qed.

Print Assumptions standard_basis_expansion.
Print Assumptions standard_coordinates_unique.
